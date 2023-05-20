import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Service/auth.service';
import { NgToastService } from 'ng-angular-popup';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth :AuthService , private router:Router,private toast: NgToastService)
  {
  
  }
  canActivate():boolean
  {
    if (this.auth.isLogged())
    return true;
    else 
    {
      this.toast.error({detail:"ERROR",summary:"Login first"});
      this.router.navigate(['/logform']);
      return false;
    }
  }
}
