import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs';

export const spinnerloadingInterceptor: HttpInterceptorFn = (req, next) => {

  const ngxSpinnerService = inject(NgxSpinnerService)

  // req show loading

  ngxSpinnerService.show()

  // finalize : work after the response finish
  return next(req).pipe(finalize(() => {
    ngxSpinnerService.hide()
  }));  // res hide loading
};
