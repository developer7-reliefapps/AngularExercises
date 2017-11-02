import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { HttpCache } from './HttpCache';
import { Observable } from 'rxjs';

@Injectable()
export class CachingInterceptor implements HttpInterceptor {

constructor(private cache: HttpCache) {}

intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  if (req.method !== 'GET') {
    return next.handle(req);
  }
  const cachedResponse = this.cache.get(req);
  if (cachedResponse) {
    return Observable.of(cachedResponse);
  }
  return next.handle(req).do(event => {
    if (event instanceof HttpResponse) {
      this.cache.put(req, event);
    }
  })
}


}
