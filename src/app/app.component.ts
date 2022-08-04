import { Component } from '@angular/core';
import { Product } from './models/product.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-store';
  url = 'https://www.w3schools.com/howto/img_avatar.png';

  products: Product[] = [
    {
      id: 1,
      name: 'Red Shirt',
      price: 50,
      description: 'A red shirt - it is pretty red!',
      img: './assets/images/album.jpg',
    },
    {
      id: 2,
      name: 'Blue Shirt',
      price: 20,
      description: 'A blue shirt - it is pretty blue!',
      img: './assets/images/bike.jpg',
    }
  ];

  imgLoaded(imgUrl: string) {
    console.log('AppComponent: img loaded', imgUrl);
  }
}
