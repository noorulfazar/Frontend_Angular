// import { CanActivateFn } from '@angular/router';

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  // canActivate(): boolean {
  //   if (this.auth.isLoggedIn()) return true;
  //   this.router.navigate(['/login']);
  //   return false;
  // }

  canActivate(): boolean {
    if (this.auth.isLoggedIn()) {
      // If the user is logged in, allow them to access the route.
      return true;
    } else {
      // If the user is NOT logged in, redirect them to the login page.
      this.router.navigate(['/login']);
      // And then block them from accessing the original route.
      return false;
    }
  }
  
}

