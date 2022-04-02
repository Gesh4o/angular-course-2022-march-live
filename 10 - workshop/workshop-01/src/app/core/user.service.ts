import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IUser } from './interfaces';
import { StorageService } from './storage.service';

export interface CreateUserDto { username: string, email: string, password: string, tel?: string }

@Injectable()
export class UserService {

  constructor(private storage: StorageService, private httpClient: HttpClient) {
    // console.log('UserService#constructor')
  }

  getProfile$(): Observable<IUser> {
    return this.httpClient.get<IUser>(`${environment.apiUrl}/users/profile`, { withCredentials: true })
  }
}

