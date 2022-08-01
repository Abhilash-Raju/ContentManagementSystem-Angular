import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder, private _auth: AuthService,private _router: Router) { }

  loginForm!:FormGroup;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['',[Validators.required]],
      password: ['',[Validators.required]]
      })
  }

  get email(){
    return this.loginForm.controls['email']
  }
  get password(){
    return this.loginForm.controls['password']
  }


    loginUser () {
      this._auth.loggingUser(this.loginForm.value)
      .subscribe(
        res => {
          console.log("Success!",res)
          localStorage.setItem('token', res.token);
          // let token=localStorage.getItem('token')||"";
          // let parse = atob(token.split('.')[1])
          // let _roleAccess= JSON.parse(parse);
          // localStorage.setItem('user',_roleAccess.subject.username)
          alert("Welcome to Fit'N'Healthy")
          this._router.navigate(['/dashboard'])
        },
        err => {
          console.log(err)
          alert("Hi User, Please enter valid credential to Log In")
        }
      ) 
    }
}
