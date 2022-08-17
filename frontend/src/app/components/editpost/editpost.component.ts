import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategorydataService } from 'src/app/services/categorydata.service';
import { PostdataService } from 'src/app/services/postdata.service';
@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.css']
})
export class EditpostComponent implements OnInit {
  message='';
  className=""
  cats:any;
  postItem={
    head:"",
    subhead:"",
    body:"",
    authorname: "",
    date: "",
    category: ""   
  }
  constructor(private _postserve:PostdataService, private router:Router,private _cat:CategorydataService) { }

  ngOnInit(): void {
      this._cat.allCategory().subscribe((data)=>{
        this.cats=JSON.parse(JSON.stringify(data));
      });
      let postId = localStorage.getItem("postid");
      this._postserve.getPost(postId).subscribe((data)=>{
      this.postItem=JSON.parse(JSON.stringify(data));
    })
  }

  editPost()
  {    
    this._postserve.editPost(this.postItem); 
    console.log(this.postItem); 
    alert("Post is updated successfully");
    setTimeout(() => {
              this.router.navigate(['posts']);
          }, 2000);  
  }

  getclassName(){
    return this.className;
  }

}
