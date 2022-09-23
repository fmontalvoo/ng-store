import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { filter, map } from 'rxjs/operators';
import { getAnalytics, } from 'firebase/analytics';
import { logEvent } from '@angular/fire/analytics';

import { AuthService } from './services/auth.service';
import { FilesService } from './services/files.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-store';
  url = 'https://www.w3schools.com/howto/img_avatar.png';

  showImg = true;

  constructor(
    private router: Router,
    private fs: FilesService,
    private auth: AuthService,
  ) {
    const sub = this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(event => event as NavigationEnd)
      )
      .subscribe(event => {
        const analytics = getAnalytics();
        console.info(location.href, event.urlAfterRedirects);
        logEvent(analytics, 'page_view', {
          page_location: location.href,
          page_path: event.urlAfterRedirects,
        });
        console.info('page_view');
      });
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
