
import {HttpEvent, HttpHandler, HttpInterceptor} from "@angular/common/http";
import {HttpRequest} from "@angular/common/http";

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TokeninterceptorService implements HttpInterceptor{

  constructor() { }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let clonedRequest = req.clone({
      setHeaders: {
        Authorization: localStorage.getItem('token')
          ? localStorage.getItem('token')
          : '',
      },
    });
    console.log("new headers", clonedRequest.headers.keys());
    return next.handle(clonedRequest);
  }
}
