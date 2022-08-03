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
  className=""
  message='';

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
      (res:any) => {
        if(res.success){
          this.message='Account created'
          console.log(this.message)
          this.className='alert alert-success'
          setTimeout(function(){
            window.location.reload();
         }, 3000);
        }else 
        {          
          this.message=res.message;
          console.log(this.message);
          this.className='alert alert-danger'
        }  
      },
        (err:any) => {
          this.message="Server Error";
          console.log('Error!',err)
          this.className='alert alert-info'
          setTimeout(function(){
            window.location.reload();
         }, 3000);        }
    )
  }

  getclassName(){
    return this.className;
  }
}
