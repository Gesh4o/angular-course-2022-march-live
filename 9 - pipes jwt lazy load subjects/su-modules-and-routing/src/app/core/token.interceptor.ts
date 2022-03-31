import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    request = request.clone({
      setHeaders: {
        Authorization: 'Bearer our-token-goes-here',
        'Content-Type': 'application/json'
      },
    })

    return next.handle(request);
  }
}
