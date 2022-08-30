import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  limit = 10;
  offset = 0;
  public products: Product[] = [];

  constructor(private ps: ProductsService,) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.ps.getProducts(this.limit, this.offset)
      .subscribe({
        next: products => {
          console.log(products);
          this.products = this.products.concat(products);
        },
        error: e => console.log(e.error.message),
        complete: () => console.log('complete')
      });
  }

  loadMore() {
    this.offset += this.limit;
    this.loadProducts();
  }

}
