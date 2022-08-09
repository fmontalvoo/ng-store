import { Injectable } from '@angular/core';

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myCartProducts: Product[] = [];

  constructor() { }

  onAddToCart(product: Product): void {
    console.log('ProductsComponent: onAddToCart', product);
    this.myCartProducts.push(product);
  }

  getTotal(): number {
    return this.myCartProducts.reduce((acc, product) => acc + product.price, 0);
  }

  getCart(): Product[] {
    return this.myCartProducts;
  }
}
