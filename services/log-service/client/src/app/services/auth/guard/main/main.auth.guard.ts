import { ActivatedRouteSnapshot, CanActivateFn, Route, Router, RouterStateSnapshot } from '@angular/router';
import { LogUserComponent } from '../../../../components/log-user/log-user.component';
import { AuthService } from '../../auth.service';
import { inject } from '@angular/core';

export const mainAuthGuard: CanActivateFn = async (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  ) : Promise<boolean> => {
    const authService = inject(AuthService)
    const router = inject(Router)
    if(route.component === LogUserComponent){
      const res = await authService.loggedOrNot()
      if(!res) router.navigateByUrl('/')
      return res 
    }else{
      const res = await authService.loggedOrNot()
      if(res) router.navigateByUrl('/')
      return !res
    }
};
