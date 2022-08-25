import { Injectable } from '@angular/core';
import { CookieService } from './cookie.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private cookie: CookieService) { }

  save(token: string) {
    this.cookie.set({ name: 'access_token', value: token, session: true });
  }

  get() {
    return this.cookie.get('access_token');
  }
}
