import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestGuardGuard {
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): Observable<boolean> | Promise<boolean> | boolean {
  //   return this.authService.isAuthenticated().then(isAuth => {
  //     if (isAuth) {
  //       return true
  //     } else {
  //       this.router.navigate(['/'], {
  //         queryParams: {
  //           auth: false
  //         }
  //       })
  //     }
  //   })
  // }

}
