import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export enum Theme {
  Dark = 'dark',
  Light = 'light'
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  currentTheme: Theme = Theme.Dark;

  private _onThemeChange$: Subject<Theme> = new Subject<Theme>();

  onThemeChange$ = this._onThemeChange$.asObservable();

  constructor() { }

  changeTheme(newTheme: Theme) {
    this.currentTheme = newTheme;
    this._onThemeChange$.next(newTheme);
  }
}
