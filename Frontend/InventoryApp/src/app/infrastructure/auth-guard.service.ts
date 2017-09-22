import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
// Services
import { AuthService } from '../authentication/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
                boolean | Observable<boolean> | Promise<boolean> {
    if (this.authService.authData && this.authService.authData.isAuthenticated) {
      return true;
    } else {
      this.router.navigate(['/login']);
    }
  }

}
