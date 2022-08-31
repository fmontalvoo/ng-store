import { Component, EventEmitter, Input, Output } from '@angular/core';

import { zip } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {


  total = 0;
  showDetails = false;
  myCartProducts: Product[];

  @Input() products: Product[] = [];
  // @Input() productId: number | null = null;
  @Input() set productId(id: number | null) {
    if (id)
      this.onShowProduct(id);
  }
  @Output() loadProducts: EventEmitter<void> = new EventEmitter();

  selectedProduct!: Product;

  constructor(
    private ps: ProductsService,
    private storeService: StoreService
  ) {
    this.myCartProducts = this.storeService.getCart();
  }


  onAddToCart(product: Product): void {
    this.storeService.onAddToCart(product);
    this.total = this.storeService.getTotal();
  }

  onShowProduct(id: number) {
    console.log('onShowProduct', id);
    this.ps.getProduct(id)
      .subscribe(product => {
        this.selectedProduct = product;
        this.toggleProductDetail();
      });
  }

  toggleProductDetail() {
    this.showDetails = !this.showDetails;
  }

  load() {
    this.loadProducts.emit();
  }

  readAndUpdateProduct(id: number) {
    // Peticiones en cadena
    this.ps.getProduct(id)
      .pipe(
        switchMap(product => this.ps.update(id, { title: 'New title' }))
      )
      .subscribe(product => {
        console.log(product);
      });

    // Penticiones en paralelo
    zip(this.ps.getProduct(id), this.ps.update(id, { title: 'New title' }))
      .subscribe(products => {
        const get = products[0];
        const update = products[1];
        console.log(products, get, update);
      });

  }

}
