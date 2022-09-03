import { Component, OnInit } from '@angular/core';

import { Category } from 'src/app/models/category.model';

import { AuthService } from 'src/app/services/auth.service';
import { StoreService } from 'src/app/services/store.service';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  isLoggedIn = false;
  activeMenu = false;
  productsCount = 0;
  email: string = '';

  categories: Category[] = [];

  constructor(
    private router: Router,
    private auth: AuthService,
    private cs: CategoryService,
    private storeService: StoreService,
  ) { }

  ngOnInit(): void {
    console.log('Is logged in?', this.isLoggedIn);
    this.auth.currentUser$.subscribe(currentUser => {
      this.isLoggedIn = Boolean(currentUser);
      this.email = currentUser?.email || '';
    });
    this.storeService.myCart$.subscribe(products => {
      this.productsCount = products.length;
    });
    this.loadCategories();
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }

  login() {
    // this.auth.loginAndGetProfile('john@mail.com', 'changeme')
    this.auth.loginAndGetProfile('admin@mail.com', 'admin123')
      .subscribe(user => {
        this.isLoggedIn = true;
        console.info(user);
        this.email = user.email;
      });
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }

  loadCategories() {
    this.cs.getCategories()
      .subscribe({
        next: categories => {
          console.log(categories);
          this.categories = categories;
        },
        error: e => console.log(e.error.message),
        complete: () => console.log('complete')
      });
  }

}
