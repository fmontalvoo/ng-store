import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { CookieService } from './cookie.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(
    private cookie: CookieService,
    @Inject(PLATFORM_ID) private platformId: string
  ) { }

  save(token: string) {
    if (isPlatformBrowser(this.platformId))
      this.cookie.set({ name: 'access_token', value: token, session: true });
  }

  get() {
    if (isPlatformBrowser(this.platformId))
      return this.cookie.get('access_token');
    return null;
  }

  remove() {
    if (isPlatformBrowser(this.platformId))
      this.cookie.delete('access_token');
  }
}
