import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categoriesUrl = `${environment.api_url}/categories`;

  constructor(private http: HttpClient) { }

  getCategories(limit?: number, offset?: number) {
    let params = new HttpParams();
    if (limit && offset !== undefined) {
      params = params.set('limit', limit);
      params = params.set('offset', offset);
    }
    return this.http.get<Category[]>(this.categoriesUrl, { params });
  }


  getProductsByCategory(categoryId: string, limit?: number, offset?: number) {
    let params = new HttpParams();
    if (limit && offset !== undefined) {
      params = params.set('limit', limit);
      params = params.set('offset', offset);
    }
    return this.http.get<Product[]>(`${this.categoriesUrl}/${categoryId}/products`, { params });
  }
}
