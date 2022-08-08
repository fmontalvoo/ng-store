import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products: Product[] = [
    {
      id: 1,
      name: 'Automobil de juguete',
      price: 100,
      img: 'https://static3.depositphotos.com/1000865/118/i/600/depositphotos_1183767-stock-photo-toy-car.jpg'
    },
    {
      id: 2,
      name: 'Muñeca de trapo',
      price: 180,
      img: 'https://kinuma.com/8869-home_default/muneca-de-trapo-mali.jpg'
    },
    {
      id: 3,
      name: 'Pelota de futbol',
      price: 120,
      img: 'https://media.istockphoto.com/photos/soccer-ball-isolated-3d-rendering-picture-id1257575611?k=20&m=1257575611&s=612x612&w=0&h=g530fFJspT42xFGY7HycLvpBKLXpJ2XAkKCRyY-SK80='
    },
    {
      id: 4,
      name: 'Castillo',
      price: 220,
      img: 'https://i.imgur.com/44nzvkQ.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
