import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export const ApiKeyInterceptor: HttpInterceptorFn = (req, next) => {
  const authReq = req.clone({
    setHeaders: {
      ["x-api-key"]: environment.api_key,
    }
  });
  return next(authReq);
};
