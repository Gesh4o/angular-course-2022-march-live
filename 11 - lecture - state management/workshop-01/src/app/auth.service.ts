import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, EMPTY, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IRootState, login, logout } from './+store';
import { IUser } from './core/interfaces';
import { CreateUserDto } from './core/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser$ = this.store.select(globalState => globalState.currentUser);
  isLoggedIn$ = this.currentUser$.pipe(map(user => !!user));

  constructor(private httpClient: HttpClient, private store: Store<IRootState>) {
  }

  login$(userData: { email: string, password: string }): Observable<IUser> {
    return this.httpClient
      .post<IUser>(`${environment.apiUrl}/login`, userData, { withCredentials: true, observe: 'response' })
      .pipe(
        map(response => response.body),
      )
  }

  logout$(): Observable<void> {
    return this.httpClient
      .post<void>(`${environment.apiUrl}/logout`, {}, { withCredentials: true })
  }

  register$(userData: CreateUserDto): Observable<IUser> {
    return this.httpClient.post<IUser>(`${environment.apiUrl}/register`, userData, { withCredentials: true })
  }

  authenticate(): Observable<IUser> {
    return this.httpClient
      .get<IUser>(`${environment.apiUrl}/users/profile`, { withCredentials: true })
      .pipe(tap(currentProfile => this.handleLogin(currentProfile)), catchError((err) => {
        return EMPTY;
      }))
  }

  handleLogin(newUser: IUser) {
    this.store.dispatch(login({ user: newUser }));
  }

  handleLogout() {
    this.store.dispatch(logout());
  }
}
