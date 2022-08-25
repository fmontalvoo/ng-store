import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { JWT } from '../models/jwt.model';
import { User } from '../models/user.model';

import { TokenService } from './token.service';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = `${environment.api_url}/auth`;

  constructor(private http: HttpClient, private ts: TokenService) { }

  login(email: string, password: string) {
    return this.http.post<JWT>(`${this.url}/login`, { email, password })
      .pipe(
        tap(token => {
          this.ts.save(token.access_token);
        })
      );
  }

  loginAndGetProfile(email: string, password: string) {
    return this.login(email, password)
      .pipe(
        switchMap(() => this.profile()),
      );
  }

  profile() {
    return this.http.get<User>(`${this.url}/profile`);
  }
}
