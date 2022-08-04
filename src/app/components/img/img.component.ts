import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnChanges, OnInit, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() img!: string;
  @Output() imgLoadedEvent = new EventEmitter<string>();

  imgDefault: string = './assets/images/album.jpg';

  constructor() {
    // Antes del renderizado
    console.log('1) ImgComponent: constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Antes y durante el renderizado
    // Detecta cambios en los inputs.
    console.log('2) ImgComponent: ngOnChanges');
  }

  ngOnInit(): void {
    // Antes del renderizado
    // Puede ejecutar funciones asincronas.
    // Se ejecuta una sola vez.
    console.log('3) ImgComponent: ngOnInit');
  }

  ngDoCheck(): void {
    // Se ejecuta cada vez que se detecta un cambio.
    console.log('4) ImgComponent: ngDoCheck');
  }

  ngAfterContentInit(): void {
    // Despues del renderizado.
    // Manejo de contenidos.
    console.log('5) ImgComponent: ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    // Despues del renderizado.
    // Detecta cambios en los contenidos.
    console.log('6) ImgComponent: ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    // Despues del renderizado.
    // Manejo de elementos DOM.

    console.log('7) ImgComponent: ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('8) ImgComponent: ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    // Se ejecuta cuando se elimina el componente del DOM.
    console.log('9) ImgComponent: ngOnDestroy');
  }



  imgLoaded() {
    console.log('ImgComponent: img loaded');
    this.imgLoadedEvent.emit(this.img);
  }

  imgError() {
    this.img = this.imgDefault;
  }

}
