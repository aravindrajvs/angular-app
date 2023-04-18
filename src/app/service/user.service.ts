import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, UserCreate } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) { }

  createUser(user: UserCreate): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}`, user);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

}
