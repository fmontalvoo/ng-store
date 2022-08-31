import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SwiperModule } from 'swiper/angular';

import { ImgComponent } from './components/img/img.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';

import { TimeAgoPipe } from '../shared/pipes/time-ago.pipe';

import { HighlightDirective } from '../shared/directives/highlight.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SwiperModule,
  ],
  declarations: [
    ImgComponent,
    ProductComponent,
    ProductsComponent,
    TimeAgoPipe,
    HighlightDirective,
  ],
  exports: [
    ImgComponent,
    ProductComponent,
    ProductsComponent,
    TimeAgoPipe,
    HighlightDirective,
  ]
})
export class SharedModule { }
