import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import {PasswordValidator} from '../../shared/password-validator';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm!: FormGroup;
  constructor(private fb: FormBuilder, private authservice :AuthService,private _router: Router) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      userName: ['',[Validators.required]],
      email: ['',[Validators.required]],
      subscribe: [false],
      password: ['',[Validators.required]],
      confirmPassword: ['',Validators.required],
    },{validator: PasswordValidator})

    this.registrationForm.get('subscribe')?.valueChanges
    .subscribe(checkedValue=>{
      if (checkedValue){
        return true
      }
      else {
        return false
      }
    })
  }

  get userName(){
    return this.registrationForm.controls['userName']
  }
  get email(){
    return this.registrationForm.controls['email']
  }
  get password(){
    return this.registrationForm.controls['password']
  }
  get confirmPassword(){
    return this.registrationForm.controls['confirmPassword']
  }
  
  get contactno(){
    return this.registrationForm.controls['contactno']

  }

  onSubmit(){
    console.log(this.registrationForm.value)
    this.authservice.registeringUser(this.registrationForm.value)
    .subscribe(
      response =>{
        console.log('Success!',response);
        alert("Sign up Successful. Please proceed to Login.");
        this._router.navigate(['/login']);
      },
      error =>{
        console.log('Error!',error)
        alert("Something went wrong!!")
      }
    )
  }
}
