import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RootGuard implements CanActivate {
  constructor(private authService:AuthService,private route:Router){
  }
  canActivate(){
    if(this.authService.userRoleAccess())
    return true;
    else
    {
      this.route.navigate(['dashboard'])
      return false 
    }
  }
  
}
