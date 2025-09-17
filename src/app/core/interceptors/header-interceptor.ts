import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {

  const cookieService = inject(CookieService)

  // REQ



  // send headers req
  // for all api
  if (cookieService.check('token')) {
    req = req.clone({
      setHeaders: {
        token: cookieService.get('token'),
      },
    });

  }
  return next(req); // RES




  // for specific api

  // if (cookieService.check('token')) {
  //   if(req.url.includes('cart') || req.url.includes('wishlist')  ){
  //   req = req.clone({ v
  //     setHeaders: {
  //       token: cookieService.get('token'),
  //     },
  //   });
  //   }
  // }
  // return next(req); 

};
