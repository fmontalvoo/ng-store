import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CreateUserDTO, User } from '../models/user.model';
import { checkTime } from '../interceptors/time.interceptor';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = `${environment.api_url}/users`;

  constructor(private http: HttpClient) { }

  create(user: CreateUserDTO) {
    return this.http.post<User>(this.url, user);
  }

  getUsers() {
    return this.http.get<User[]>(this.url, { context: checkTime() });
  }
}
