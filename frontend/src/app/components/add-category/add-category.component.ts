import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

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
    return this.firstFormGroup.controls['firstCtrl']
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
  
  constructor(private _formBuilder: FormBuilder) {}
  
  
  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      head: ['', Validators.required],
      subhead: ['', Validators.required],
      image: ['', Validators.required],
      body: ['', Validators.required]
    });
  }

}
