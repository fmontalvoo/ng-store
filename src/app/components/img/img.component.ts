import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnChanges, OnInit, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  // counter = 0;
  // counterInterval: number | undefined;

  img!: string;
  @Input('img')
  set changeImg(img: string) {
    // Escucha unicamente los cambios en el input(img).
    this.img = img;
    // console.log('ImgComponent: changeImg: ' + this.img);
  }
  @Input() alt: string = '';
  @Output() imgLoadedEvent = new EventEmitter<string>();

  imgDefault: string = './assets/images/no-img.png';

  constructor() {
    // Antes del renderizado

    // console.log('1) ImgComponent: constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Antes y durante el renderizado
    // Detecta cambios en los inputs.

    // console.log('2) ImgComponent: ngOnChanges');
    // console.log('Changes:', changes);
  }

  ngOnInit(): void {
    // Antes del renderizado
    // Puede ejecutar funciones asincronas.
    // Se ejecuta una sola vez.

    // console.log('3) ImgComponent: ngOnInit');

    // this.counterInterval = window.setInterval(() => {
    //   this.counter++;
    //   console.info('ImgComponent: counter: ' + this.counter);
    // }, 18 * 100000);
  }

  ngDoCheck(): void {
    // Se ejecuta cada vez que se detecta un cambio.

    // console.log('4) ImgComponent: ngDoCheck');
  }

  ngAfterContentInit(): void {
    // Despues del renderizado.
    // Manejo de contenidos.

    // console.log('5) ImgComponent: ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    // Despues del renderizado.
    // Detecta cambios en los contenidos.

    // console.log('6) ImgComponent: ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    // Despues del renderizado.
    // Manejo de elementos DOM.

    // console.log('7) ImgComponent: ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    // Despues del renderizado.
    // Detecta cambios en los elementos DOM.

    // console.log('8) ImgComponent: ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    // Se ejecuta cuando se elimina el componente del DOM.
    // if (this.counterInterval) {
    //   window.clearInterval(this.counterInterval);
    // }

    // console.log('9) ImgComponent: ngOnDestroy');
  }



  imgLoaded() {
    // console.log('ImgComponent: img loaded');
    this.imgLoadedEvent.emit(this.img);
  }

  imgError() {
    this.img = this.imgDefault;
  }

}
