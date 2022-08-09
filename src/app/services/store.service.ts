import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myCartProducts: Product[] = [];
  private myCart = new BehaviorSubject<Product[]>([]);

  myCart$ = this.myCart.asObservable();

  constructor() { }

  onAddToCart(product: Product): void {
    console.log('ProductsComponent: onAddToCart', product);
    this.myCartProducts.push(product);
    this.myCart.next(this.myCartProducts);
  }

  getTotal(): number {
    return this.myCartProducts.reduce((acc, product) => acc + product.price, 0);
  }

  getCart(): Product[] {
    return this.myCartProducts;
  }
}
