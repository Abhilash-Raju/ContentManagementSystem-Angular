import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategorydataService } from 'src/app/services/categorydata.service';

@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.css']
})
export class EditcategoryComponent implements OnInit {

  message='';
  className=""
  cats:any;
  categoryItem={
    category:"",
     about: ""
  }
  constructor(private router:Router,private _cat:CategorydataService) { }

  ngOnInit(): void {
    
    let categoryid = localStorage.getItem("categoryid");
    this._cat.getCategory(categoryid).subscribe((data)=>{
    this.categoryItem=JSON.parse(JSON.stringify(data));
  })
  }
  editCategory(){
    this._cat.editCategory(this.categoryItem); 
    console.log(this.categoryItem); 
    alert("Category is updated successfully");
    this.router.navigate(['categories']);
  }

  getclassName(){
    return this.className;
  }

}
