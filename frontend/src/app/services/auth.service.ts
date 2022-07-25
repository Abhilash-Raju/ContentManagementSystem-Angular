import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _signupUrl ="http://localhost:3000/api/signup"
  private _loginUrl ="http://localhost:3000/api/login"
  constructor(private http:HttpClient,
    private _router:Router) { 
    }
  

  registeringUser(user:any){
    return this.http.post<any>(this._signupUrl, user)
  }

  loggingUser(user:any){
    return this.http.post<any>(this._loginUrl, user)
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  loggedOutUser(){
    window.localStorage.clear()
    this._router.navigate(['/home']);
  }
  getToken(){
    console.log('Hi GetToken');
    return localStorage.getItem('token');
  }

  getUser(){
    var token=localStorage.getItem('token')||"";
    var parse = atob(token.split('.')[1])
    var _roleAccess= JSON.parse(parse);
    if(!!_roleAccess){
      console.log(_roleAccess.subject.username)
      return _roleAccess.subject.username
    }
    else {
      alert('Invalid') 
    }
  }
  userRoleAccess(){
    var token=localStorage.getItem('token')||"";
    var parse = atob(token.split('.')[1])
   var _roleAccess= JSON.parse(parse);
   if((_roleAccess.subject.role ==="SuperAdmin")||(_roleAccess.subject.email=='super@domain.com'&&_roleAccess.subject.password =="Super@1234")){
     console.log('Hello SuperAdmin')
     console.log(_roleAccess.subject.role)
     return true
   }
   console.log(_roleAccess.subject.role)
   return false
  }

}
