import { CanActivateFn } from '@angular/router';

export const errorAuthGuard: CanActivateFn = (route, state) => {
  const errorAccess = sessionStorage.getItem('error')
  return errorAccess ? true : false
};
