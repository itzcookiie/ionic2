import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Plugins } from '@capacitor/core';
import { UserService } from '../services/user.service'


const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private userService:UserService) {}

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
        return false
      })
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(next, state)  
  }  
  
}
