import { Component, Injectable, OnInit } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
// import { HttpCache } from './HttpCache';
import { Observable } from 'rxjs';

@Component({
  templateUrl: 'caching-interceptor.html',
  // styleUrls: ['']
})

@Injectable()
export class CachingInterceptor implements OnInit {

// constructor(private cache: HttpCache) {
//   this.checkCacheAvailability();
// }

ngOnInit() {
  // Check cache storage availability once the page is loaded
}

// intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//   if (req.method !== 'GET') {
//     return next.handle(req);
//   }
//   const cachedResponse = this.cache.get(req);
//   if (cachedResponse) {
//     return Observable.of(cachedResponse);
//   }
//   return next.handle(req).do(event => {
//     if (event instanceof HttpResponse) {
//       this.cache.put(req, event);
//     }
//   })
// }

//Check the cache availability
public checkCacheAvailability(): void {
  if (localStorage) {
    let test: string = "test";
    let testy = { name:'test', number:5};
  } else {
    console.log("No local storage available");
  }
}
}
