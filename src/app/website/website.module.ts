import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwiperModule } from 'swiper/angular';

import { WebsiteRoutingModule } from './website-routing.module';

import { SharedModule } from '../shared/shared.module';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { HomeComponent } from './pages/home/home.component';
import { MyCartComponent } from './pages/my-cart/my-cart.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    SwiperModule,
    SharedModule,
  ],
  declarations: [
    LayoutComponent,
    HomeComponent,
    MyCartComponent,
    LoginComponent,
    RegisterComponent,
    RecoveryComponent,
    ProfileComponent,
    ProductDetailComponent,
    NavBarComponent,
  ],
})
export class WebsiteModule { }