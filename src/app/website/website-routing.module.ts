import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../guards/auth.guard';
import { ExitGuard } from '../guards/exit.guard';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MyCartComponent } from './pages/my-cart/my-cart.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LayoutComponent } from './components/layout/layout.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        title: 'Home',
        component: HomeComponent,
      },
      {
        path: 'product/:id',
        title: 'Producto',
        component: ProductDetailComponent
      },
      {
        path: 'category',
        title: 'Categoria',
        data: { preload: true },
        loadChildren: () => import('./pages/category/category.module').then(m => m.CategoryModule)
      },
      {
        path: 'my-cart',
        title: 'Carrito',
        component: MyCartComponent,
      },
      {
        path: 'login',
        title: 'Login',
        component: LoginComponent,
      },
      {
        path: 'profile',
        title: 'Perfil',
        canActivate: [AuthGuard],
        component: ProfileComponent,
      },
      {
        path: 'register',
        title: 'Registro',
        canDeactivate: [ExitGuard],
        component: RegisterComponent,
      },
      {
        path: 'recovery',
        title: 'Recuperacion',
        component: RecoveryComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
