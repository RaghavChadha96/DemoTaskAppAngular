import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RootObject } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) { }
  public getUsers() {
    return this.http.get<RootObject[]>(`${this.url}/users`);
  }
}
