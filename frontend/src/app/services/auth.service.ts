import { Injectable, Injector } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { PostdataService } from './postdata.service';
import { Post } from '../components/models/postmodel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  post: Post[]=[];
  postItem={
    head:"",
    subhead:"",
    body:"",
    authorname: "",
    date: "",
    category: ""   
  }
  private _signupUrl ="http://localhost:3000/api/signup"
  private _loginUrl ="http://localhost:3000/api/login"
  constructor(private http:HttpClient,
    private _router:Router,private injector: Injector) { 
    }

    
    postAccess()
    {
      let _postservice = this.injector.get(PostdataService);
      let postId = localStorage.getItem("postid");
      _postservice.getPost(postId)
      .subscribe(
        (data)=>{
                 this.postItem=JSON.parse(JSON.stringify(data));
                })
      let token=localStorage.getItem('token')||"";
      let parse = atob(token.split('.')[1]);
      let _roleAccess= JSON.parse(parse);
      // console.log(_roleAccess.subject.username)
      // console.log(this.postItem.authorname)
      return _roleAccess.subject.username==this.postItem.authorname ? true : false;
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
    // console.log('Hi GetToken');
    return localStorage.getItem('token');
  }

  getUsers(){
    return this.http.get("http://localhost:3000/api/users");
  }

  deleteUser(id:any)
  {
    console.log("Id to delete", id);
    return this.http.delete("http://localhost:3000/api/remove/"+id)
  }

  editRole(user:any)
  {
    console.log('User Role updated')
    return this.http.put("http://localhost:3000/api/update",user)
    .subscribe(data =>{console.log(data)})
  }

  getUser(id:any){
    return this.http.get("http://localhost:3000/api/users/"+id);
  }
  
  userRoleAccess(){
    var token=localStorage.getItem('token')||"";
    var parse = atob(token.split('.')[1])
   var _roleAccess= JSON.parse(parse);
   if(_roleAccess.subject.role ==="SuperAdmin"){
     return true
   }
   return false
  }

  roleAccess(){
    let token=localStorage.getItem('token')||"";
    let parse = atob(token.split('.')[1]);
    var _roleAccess= JSON.parse(parse);
    return _roleAccess.subject.sub==true ? true : false
  }

  User(){
    var token=localStorage.getItem('token')||"";
    var parse = atob(token.split('.')[1])
   var _roleAccess= JSON.parse(parse);
   if(_roleAccess.subject.username){
     return _roleAccess.subject.username
   }
   return false
  }
    
}
