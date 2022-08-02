import { Component, OnInit } from '@angular/core';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
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


  
  constructor(private _catservice: CategorydataService, private router:Router) {}
  
  
  ngOnInit(): void {
  }

  image: any;

  createCategory()
  {
      console.log(this.categoryModel)
      this._catservice.newCategory(this.categoryModel)
      .subscribe(
        response =>{
          console.log('Success!',response)
          alert('Category Created! Please create the first post in the new Category')
          this.router.navigate(['/createpost']);
        }
          ,
        error =>console.log('Error!',error)
        )
        
  }
      
}
