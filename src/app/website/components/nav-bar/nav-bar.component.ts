import { Component, OnInit } from '@angular/core';

import { Category } from 'src/app/models/category.model';

import { AuthService } from 'src/app/services/auth.service';
import { StoreService } from 'src/app/services/store.service';
import { CategoryService } from 'src/app/services/category.service';

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
    private auth: AuthService,
    private cs: CategoryService,
    private storeService: StoreService,
  ) { }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe(products => {
      this.productsCount = products.length;
    });
    this.loadCategories();
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }

  login() {
    this.auth.loginAndGetProfile('fulano@mail.com', '12345')
      .subscribe(user => {
        this.isLoggedIn = true;
        console.info(user);
        this.email = user.email;
      });
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
