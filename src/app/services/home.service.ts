import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post-model';
import { Comments } from '../models/comments-model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private url = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  public getPosts() {
    return this.http.get<Post[]>(`${this.url}/posts`);
  }
  public getComments(){
    return this.http.get<Comments[]>(`${this.url}/comments`);
  }
}
