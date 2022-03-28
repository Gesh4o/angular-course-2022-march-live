import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

export interface IUser {
  "id": number,
  "name": string,
  "username": string,
  "email": string,
  "address": {
    "street": string,
    "suite": string,
    "city": string,
    "zipcode": number,
    "geo": {
      "lat": string,
      "lng": string
    }
  },
  "phone": string,
  "website": string,
  "company": {
    "name": string,
    "catchPhrase": string,
    "bs": string
  }
}

export interface IPost {
  id: number;
  userId: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }

  getUsers$(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
  }

  getUserById$(id: string): Observable<IUser> {
    return this.httpClient.get<IUser>('https://jsonplaceholder.typicode.com/users/' + id);
  }

  getPostsByUserId$(id: string): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>('https://jsonplaceholder.typicode.com/posts/')
      .pipe(map(posts => posts.filter(p => p.userId === +id)));
  }
}
