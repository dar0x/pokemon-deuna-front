import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const router: Router = inject(Router);

  return next(req).pipe(catchError((error: HttpErrorResponse) => {
      switch (error.status) {
        case 401:
          router.navigate(["/unauthorized/", error.error.message]);
          break;
        case 404:
          router.navigate(["/not-found/", error.error.message]);
          break;
      }
      return throwError(error);
    })
  );
};
