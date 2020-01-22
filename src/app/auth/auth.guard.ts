import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Plugins } from '@capacitor/core';
import { UserService } from '../services/user.service'


const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private userService:UserService, private router:Router) {}

  private CURRENT_USER:string = 'current-user'
 
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return Storage.get({key: this.CURRENT_USER})
      .then(data => {
        if(data.value) {
          console.log(data, 'data for storage in auth guard')
          return true;
        }
        this.router.navigate(['tabs/login'])
        return false
      })
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(next, state)  
  }  
  
}
