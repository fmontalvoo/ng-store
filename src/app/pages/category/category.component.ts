import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { Product } from 'src/app/models/product.model';

import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  template: `<app-products [products]="products" (loadProducts)="loadMore()"></app-products>`,
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  limit = 5;
  offset = 0;
  categoryId: string | null = null;
  products: Product[] = [];

  constructor(
    private cs: CategoryService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.route.params
    //   .subscribe(params => {
    //     console.log(params['id']);
    //   });

    this.route.paramMap
      .pipe(
        switchMap(params => {
          this.categoryId = params.get('id');
          return this.cs.getProductsByCategory(this.categoryId!, this.limit, this.offset);
        })
      )
      .subscribe(products => {
        this.products = products;
      });

    // this.categoryId = this.route.snapshot.params['id'];
    // this.categoryId = this.route.snapshot.paramMap.get('id');

  }

  private loadProducts() {
    this.cs.getProductsByCategory(this.categoryId!, this.limit, this.offset)
      .subscribe({
        next: products => {
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
