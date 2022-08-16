import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CategorydataService } from 'src/app/services/categorydata.service';
import { PostdataService } from 'src/app/services/postdata.service';
import { Category } from '../models/categorymodel';
import { Post } from '../models/postmodel';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  cat: Category[]=[];
  posts: Post[]=[];

  
  categoryItem={
    category:"",
     about: ""
  }

  postItem={
    head:"",
    subhead:"",
    body:"",
    authorname: "",
    date: "",
    category: ""   
  }
  constructor(private _postservice:PostdataService,private _categoryservice: CategorydataService, private router:Router,public _authservice:AuthService) { }

  ngOnInit(): void {
    let catId = localStorage.getItem("categoryid");
    this._categoryservice.getCategory(catId).subscribe((data)=>{
    this.categoryItem=JSON.parse(JSON.stringify(data));
    console.log(this.categoryItem)
  })

  //   let postId = localStorage.getItem("postid");
  //   this._postservice.getPost(postId).subscribe((data)=>{
  //   this.postItem=JSON.parse(JSON.stringify(data));
  // })
  //     this._postservice.getPosts().subscribe((data)=>{
  //       this.posts=JSON.parse(JSON.stringify(data));
  //     })
  }

  // check(){
  //   return this.categoryItem.category===this.postItem.category ? true:false
  // }

  
  editCategory(category:any)
  {
    localStorage.setItem("categoryid", category._id.toString());
    this.router.navigate(['editcategory']);
  }

  deleteCategory(category:any)
  {
    if(confirm("Are you sure to delete the category ?")) {
    console.log(category._id);
    this._categoryservice.deleteCategory(category._id)
      .subscribe((data) => {
        this.cat = this.cat.filter(p => p !== category);
      });
      alert("category is deleted successfully");
      this.router.navigate(['categories']);
    }
  }

  
  singlepost(post:any){
    localStorage.setItem("postid", post._id.toString());
    this.router.navigate(['post']);
  }


}
