import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CategorydataService } from 'src/app/services/categorydata.service';
import { Category } from '../models/categorymodel';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  cat: Category[]=[];

  
  categoryItem={
    category:"",
     about: ""
  }
  constructor(private _categoryservice: CategorydataService, private router:Router,public _authservice:AuthService) { }

  ngOnInit(): void {
    let catId = localStorage.getItem("categoryid");
    this._categoryservice.getCategory(catId).subscribe((data)=>{
    this.categoryItem=JSON.parse(JSON.stringify(data));
    console.log(this.categoryItem)
  })
  }

}
