import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product!: Product;
  @Output() addedProduct = new EventEmitter<Product>();
  @Output() showDetail = new EventEmitter<number>();

  constructor() { }

  addToCart() {
    console.log('ProductComponent: addToCart', this.product);
    this.addedProduct.emit(this.product);
  }

  showProduct() {
    this.showDetail.emit(this.product.id);
  }

}
