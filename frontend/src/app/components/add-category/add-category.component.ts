import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ]
})


export class AddCategoryComponent implements OnInit {

  firstFormGroup!:FormGroup;
  secondFormGroup!:FormGroup;

  get category(){
    return this.firstFormGroup.controls['categoryName']
  }
  get about(){
    return this.firstFormGroup.controls['about']
  }
  get head(){
    return this.secondFormGroup.controls['head']
  }
  get subhead(){
    return this.secondFormGroup.controls['subhead']
  }
  get image(){
    return this.secondFormGroup.controls['image']
  }
  get body(){
    return this.secondFormGroup.controls['body']
  }

      // body
      get bodyControl() {
        return this.secondFormGroup.get('body') as FormControl;
    }

    get bodyControlValid() {
        return this.bodyControl.touched && !this.bodyControlInvalid;
    }

    get bodyControlInvalid() {
        return (
            this.bodyControl.touched &&
            (this.bodyControl.hasError('required') || this.bodyControl.hasError('body'))
        );
    }
  
  constructor(private _formBuilder: FormBuilder, private authservice:AuthService) {}
  
  
  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      categoryName: ['', Validators.required],
      about: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      head: ['', Validators.required],
      subhead: ['', Validators.required],
      image: ['', Validators.required],
      body: ['', Validators.required]
    });


    this.firstFormGroup.get('subscribe')?.valueChanges
    .subscribe(checkedValue=>{
      if (checkedValue){
        return true
      }
      else {
        return false
      }
    })


    this.secondFormGroup.get('subscribe')?.valueChanges
    .subscribe(checkedValue=>{
      if (checkedValue){
        return true
      }
      else {
        return false
      }
    })
  }


  onSubmit(){
    console.log(this.firstFormGroup.value)
    console.log(this.secondFormGroup.value)
    this.authservice.registeringUser(this.firstFormGroup.value)
    .subscribe(
      response =>console.log('Success!',response),
      error =>console.log('Error!',error)
    )
    this.authservice.registeringUser(this.secondFormGroup.value)
    .subscribe(
      response =>console.log('Success!',response),
      error =>console.log('Error!',error)
    )


  }
}
