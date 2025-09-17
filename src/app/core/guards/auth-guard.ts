
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const authGuard: CanActivateFn = (route, state) => {

  const cookieService = inject(CookieService)
  const router = inject(Router)

  // make guard to can reach any page if you dont make login
  // use paseUrl dont use navigate (['/login'])
  // guard must return tru or false

  if (cookieService.get('token')) {
    return true;
  }
  else {
    return router.parseUrl('/login')
  }


};
