import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

  const toastrService = inject(ToastrService)

  // REQ


  // pipe : edit and return it again
  return next(req).pipe(catchError((err) => {

    // logic errors

    toastrService.error(err.error.message)

    // return it as Observable
    return throwError(() => err)

  })); // RES

  // RXJS OP

};
