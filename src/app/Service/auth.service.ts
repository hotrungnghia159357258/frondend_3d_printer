import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseURL:string="https://localhost:7150/api/User/"
  private userpayload:any;
  constructor(private http:HttpClient, private router: Router) {
    this.userpayload=this.decodeToken(); 
   }

  register(userObj:any)
  {
      return this.http.post<any>(`${this.baseURL}Register`,userObj);
  }

  login(loginObj:any)
  {
    return this.http.post<any>(`${this.baseURL}authentication`,loginObj);
  }
  logout()
  {
    localStorage.clear();
    this.router.navigate(['/logform']);

  }
  storeToken(tokenValue:string)
  {
    localStorage.setItem('token',tokenValue);
  }
  getToken()
  {
    return localStorage.getItem('token');
  }
  isLogged():boolean
  {
    return !!localStorage.getItem('token');
  }
  decodeToken()
  {
    const jwthelper=new JwtHelperService();
    const token=this.getToken()!;
    console.log(jwthelper.decodeToken(token))
    return jwthelper.decodeToken(token);
  }

  getnamefromtoken()
  {
    if(this.userpayload)
    return this.userpayload.unique_name;
  }
  getrolefromtoken()
  {
    if(this.userpayload)
    return this.userpayload.role;
  }
}
