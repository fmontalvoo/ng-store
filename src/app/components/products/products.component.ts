import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  total = 0;
  showDetails = false;
  myCartProducts: Product[];

  public products: Product[] = [];
  selectedProduct!: Product;

  constructor(
    private ps: ProductsService,
    private storeService: StoreService
  ) {
    this.myCartProducts = this.storeService.getCart();
  }

  ngOnInit(): void {
    this.ps.getProducts()
      .subscribe((products: any) => {
        console.log(products);
        this.products = products;
      });
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

}
