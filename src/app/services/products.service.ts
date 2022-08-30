import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpStatusCode } from '@angular/common/http';

import { retry, catchError, map } from "rxjs/operators";
import { throwError } from "rxjs";

import { checkTime } from '../interceptors/time.interceptor';

import { CreateProductDTO, Product, UpdateProductDTO } from '../models/product.model';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // private url = '/api/products';
  private productsUrl = `${environment.api_url}/products`;

  constructor(private http: HttpClient) { }

  create(product: CreateProductDTO) {
    return this.http.post<Product>(this.productsUrl, product);
  }

  getProduct(id: number) {
    return this.http.get<Product>(`${this.productsUrl}/${id}`)
      .pipe(
        map(product => ({ ...product, taxes: product.price * 0.12 })),
        catchError((e: HttpErrorResponse) => {
          console.error(e.message);
          if (e.status === HttpStatusCode.NotFound)
            return throwError(() => new Error('Product not found'));
          return throwError(() => new Error(`-> ${e.message}`));
        })
      );
  }

  update(id: number, product: UpdateProductDTO) {
    return this.http.put<Product>(`${this.productsUrl}/${id}`, product);
  }

  delete(id: number) {
    return this.http.delete<boolean>(`${this.productsUrl}/${id}`);
  }

  getProducts(limit?: number, offset?: number) {
    let params = new HttpParams();
    if (limit && offset !== undefined) {
      params = params.set('limit', limit);
      params = params.set('offset', offset);
    }
    return this.http.get<Product[]>(this.productsUrl, { params, context: checkTime() })
      .pipe(
        retry(3),
        map(products => products.map(product => ({ ...product, taxes: product.price * 0.12 }))),
      );
  }

  getProductsByPage(limit: number, offset: number) {
    return this.http.get<Product[]>(`${this.productsUrl}`, { params: { limit, offset } });
  }
}
