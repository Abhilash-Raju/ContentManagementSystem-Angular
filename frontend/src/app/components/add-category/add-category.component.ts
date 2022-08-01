import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { AuthService } from 'src/app/services/auth.service';
import { PostdataService } from 'src/app/services/postdata.service';
import { Post } from '../models/blogmodel';
import { Category } from '../models/categorymodel';
import { Router } from '@angular/router';
import { CategorydataService } from 'src/app/services/categorydata.service';
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

  categoryModel = new Category(0,"","");
  postModel= new Post(0,"","","","","","","","");


  
  constructor(private authservice:AuthService,private _catservice: CategorydataService, private _postserve:PostdataService, private router:Router) {}
  
  
  ngOnInit(): void {
  }

  image: any;

  createCategory()
  {
      console.log(this.categoryModel)
      this._catservice.newCategory(this.categoryModel)
      .subscribe(
        response =>console.log('Success!',response),
        error =>console.log('Error!',error)
        )

      console.log(this.postModel)
      this._postserve.newPost(this.postModel)
      .subscribe(
          data => console.log('Success!', data),
          error => console.log('Error!', error)
      )
      // this.router.navigate(['/posts']);
  }
      onImageSelect(event: any){
        const image=event.target.files[0];
        this.image = image;
      }
}
