import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from './interfaces';
import { StorageService } from './storage.service';

export interface IUpdateUserDto extends Pick<IUser, 'username' | 'email' | 'tel'> {
  profilePicture?: File;
}

export interface CreateUserDto { username: string, email: string, password: string, tel?: string }

@Injectable()
export class UserService {

  constructor(private storage: StorageService, private httpClient: HttpClient) {
    // console.log('UserService#constructor')
  }

  getProfile$(): Observable<IUser> {
    return this.httpClient.get<IUser>(`${environment.apiUrl}/users/profile`, { withCredentials: true })
  }

  // The below method was added offline.
  updateProfile$(newUser: IUpdateUserDto): Observable<IUser> {
    const formData = new FormData();
    formData.set('username', newUser.username);
    formData.set('email', newUser.email);
    formData.set('tel', newUser.tel);

    if (newUser.profilePicture){
      formData.append('profilePicture', newUser.profilePicture);
    }

    return this.httpClient.put<IUser>(`${environment.apiUrl}/users/profile`, formData, { withCredentials: true })
  }
  // End of offline update.
}

