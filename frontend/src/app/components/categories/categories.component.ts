import { Component, OnInit } from '@angular/core';
import { Category } from '../models/categorymodel';
import { CategorydataService } from 'src/app/services/categorydata.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  title:String = 'Categories';

  cats: Category[]=[];

  constructor(private _categoryservice: CategorydataService, private router:Router,public _authservice:AuthService) { }

  ngOnInit(): void {
    this._categoryservice.getCategories().subscribe((data)=>{
      this.cats=JSON.parse(JSON.stringify(data));
    })
  }

  category(cat:any)
  {
    localStorage.setItem("categoryid", cat._id.toString());
    // localStorage.setItem("category", cat.category.toString());
    this.router.navigate(['category']);
  }


}
