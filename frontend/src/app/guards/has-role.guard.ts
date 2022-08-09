import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class HasRoleGuard implements CanActivate {
  constructor(private authService:AuthService,private route:Router){
  }
  canActivate(){
    if(this.authService.roleAccess())
    return true;
    else
    {
      this.route.navigate(['/dashboard'])
      return false 
    }
  }
}
