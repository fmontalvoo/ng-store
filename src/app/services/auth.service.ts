import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable, tap } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { JWT } from '../models/jwt.model';
import { User } from '../models/user.model';

import { TokenService } from './token.service';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = `${environment.api_url}/auth`;

  private currentUser = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUser.asObservable();

  constructor(private http: HttpClient, private ts: TokenService) {
    this.currentUser.next(this.user);
  }

  get user(): User | null {
    const storedUser = localStorage.getItem('ng-store_user');
    return storedUser
      ? JSON.parse(storedUser)
      : null;
  }

  login(email: string, password: string): Observable<JWT> {
    return this.http.post<JWT>(`${this.url}/login`, { email, password })
      .pipe(
        tap(token => {
          this.ts.save(token.access_token);
        })
      );
  }

  loginAndGetProfile(email: string, password: string): Observable<User> {
    return this.login(email, password)
      .pipe(
        switchMap(() => this.profile()),
      );
  }

  profile(): Observable<User> {
    return this.http.get<User>(`${this.url}/profile`)
      .pipe(
        tap(user => {
          localStorage.setItem('ng-store_user', JSON.stringify(user));
          this.currentUser.next(user)
        })
      );
  }

  logout() {
    this.ts.remove();
    this.currentUser.next(null);
    localStorage.removeItem('ng-store_user');
  }
}
