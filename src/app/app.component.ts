import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-store';
  url = 'https://www.w3schools.com/howto/img_avatar.png';

  showImg = true;

  imgLoaded(imgUrl: string) {
    console.log('AppComponent: img loaded', imgUrl);
  }

  toggleImg() {
    this.showImg = !this.showImg;
  }
}
