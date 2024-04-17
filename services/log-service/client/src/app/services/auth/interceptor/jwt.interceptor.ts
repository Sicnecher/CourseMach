import { HttpInterceptorFn } from '@angular/common/http';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const token = sessionStorage.getItem('access_token');
  if(token){
    const authReq = req.clone({
      headers: req.headers.set( 'Authorization', token )
    })
    return next(authReq);
  }
  return next(req);
};
