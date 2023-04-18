import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private baseUrl = 'http://localhost:8080/api/users/signin';

  constructor(private http: HttpClient) { }

  validate(login: Login): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}`, login);
  }


}
