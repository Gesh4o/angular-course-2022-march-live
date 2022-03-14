import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPost, ITheme } from './shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private httpService: HttpClient) { }

  getThemes$(): Observable<ITheme[]> {
    return this.httpService.get<ITheme[]>(environment.url + '/themes');
  }

  getRecentPosts$(): Observable<IPost[]> {
    return this.httpService.get<IPost[]>(environment.url + '/posts', {
      params: new HttpParams({ fromObject: { limit: 5 } })
    });

  }
}
