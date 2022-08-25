import { Component } from '@angular/core';

import { AuthService } from './services/auth.service';
import { FilesService } from './services/files.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-store';
  url = 'https://www.w3schools.com/howto/img_avatar.png';

  showImg = true;

  constructor(private auth: AuthService, private fs: FilesService) {

  }

  imgLoaded(imgUrl: string) {
    console.log('AppComponent: img loaded', imgUrl);
  }

  toggleImg() {
    this.showImg = !this.showImg;
  }

  download() {
    const url = 'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf';
    this.fs.getFile('file.pdf', url, 'application/pdf')
      .subscribe(() => {
        console.log('AppComponent: file downloaded');
      }
      );
  }

  upload(event: Event) {
    const element = event.target as HTMLInputElement;
    const file = element.files?.item(0);
    if (file) {
      this.fs.uploadFile(file)
        .subscribe(res => {
          console.log('AppComponent: file uploaded', res.location);
        });
    }
  }

}
