import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  @Input() img!: string;
  @Output() imgLoadedEvent = new EventEmitter<string>();

  imgDefault: string = './assets/images/album.jpg';

  constructor() { }

  ngOnInit(): void {
  }

  imgLoaded() {
    console.log('ImgComponent: img loaded');
    this.imgLoadedEvent.emit(this.img);
  }

  imgError() {
    this.img = this.imgDefault;
  }

}
