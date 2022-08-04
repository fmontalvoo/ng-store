import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-store';
  url = 'https://www.w3schools.com/howto/img_avatar.png';
}
