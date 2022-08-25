import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  isLoggedIn = false;
  activeMenu = false;
  productsCount = 0;

  constructor(private auth: AuthService, private storeService: StoreService) { }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe(products => {
      this.productsCount = products.length;
    });
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }

  login() {
    this.auth.loginAndGetProfile('fgmo@email.com', '12345')
      .subscribe(user => {
        this.isLoggedIn = true;
        console.info(user);
      });
  }

}
