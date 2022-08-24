import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CreateProductDTO, Product, UpdateProductDTO } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url = 'https://young-sands-07814.herokuapp.com/api/products';

  constructor(private http: HttpClient) { }

  create(product: CreateProductDTO) {
    return this.http.post<Product>(this.url, product);
  }

  getProduct(id: number) {
    return this.http.get<Product>(`${this.url}/${id}`);
  }

  update(id: number, product: UpdateProductDTO) {
    return this.http.put<Product>(`${this.url}/${id}`, product);
  }

  delete(id: number) {
    return this.http.delete<boolean>(`${this.url}/${id}`);
  }

  getProducts() {
    return this.http.get<Product[]>(this.url);
  }
}
