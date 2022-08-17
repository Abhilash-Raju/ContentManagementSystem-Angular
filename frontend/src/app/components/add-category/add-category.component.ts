import { Component, OnInit } from '@angular/core';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
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

  message='';
  className=""

  constructor(private _catservice: CategorydataService, private router:Router) {}
  
  
  ngOnInit(): void {
  }

  image: any;

  createCategory()
  {
      console.log(this.categoryModel)
      let category = this.categoryModel;
      this._catservice.newCategory(category)
      .subscribe(
        (res:any) =>{
          if(res.success){
            this.message='Category created'          
            console.log(this.message)
            this.className='alert alert-success';
            setTimeout(() => {
              this.router.navigate(['categories']);
          }, 2000);  
          }else 
          {
          this.message=res.message;
         //alert("Category already exist or fields are empty")
          console.log(this.message);
          this.className='alert alert-danger'
        //   setTimeout(function(){
        //     window.location.reload();
        //  }, 3000);     
        }  
        }
        ,
        (err:any) =>
        {
          this.message="Server Error";
          //alert("server error")
          this.className='alert alert-info'
          //window.location.reload();
          console.log('Error!',err)
          setTimeout(function(){
            window.location.reload();
         }, 3000);     
        }
        )
     // this.router.navigate(['/createpost']);    
  }

  getclassName(){
    return this.className;
  }
      
}
