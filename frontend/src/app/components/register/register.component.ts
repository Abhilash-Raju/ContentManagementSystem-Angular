import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  // registrationForm = new FormGroup({
  //   userName :new FormControl(''),
  //   email :new FormControl(''),
  //   password :new FormControl(''),
  //   confirmPassword :new FormControl('')
  // });
  get userName(){
    return this.registrationForm.controls['userName']
  }
  get email(){
    return this.registrationForm.controls['email']
  }

  registrationForm = this.fb.group({
    userName: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(15)]],
    email: ['',[Validators.required, Validators.pattern('^[A-Za-z0-9._%+-]+@[A-Za-z0-9._%+-]{2,}[.][A-Za-z]{2,}$')]],
    password: ['',[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/)]],
    confirmPassword: ['',Validators.required],
  })
}
