import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req, next) {

    if (this.getToken()) {
      const tokenizedReq = req.clone({
        setHeaders : {
          Authorization : 'Bearer ' + this.getToken()
        }
      });

      return next.handle(tokenizedReq);
    } else {
      return next.handle(req);
    }

  }

  private getToken() {
    if (!!localStorage.getItem('auth')) {
      return localStorage.getItem('auth');
    } else {
      return false;
    }
  }
}