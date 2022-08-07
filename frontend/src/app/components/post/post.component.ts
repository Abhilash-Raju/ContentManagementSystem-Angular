import { Component, OnInit } from '@angular/core';
import { Post } from '../models/postmodel';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { PostdataService } from 'src/app/services/postdata.service';
import { CategorydataService } from 'src/app/services/categorydata.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: Post[]=[];
  cats:any;

  postItem={
    head:"",
    subhead:"",
    body:"",
    authorname: "",
    date: "",
    category: ""   
  }
  constructor(private _postservice: PostdataService, private router:Router,public _authservice:AuthService,private _cat:CategorydataService) { }

  ngOnInit(): void {
    let postId = localStorage.getItem("postid");
    this._postservice.getPost(postId).subscribe((data)=>{
    this.postItem=JSON.parse(JSON.stringify(data));
  })
     this._cat.allCategory()
     .subscribe((data)=>{
      this.cats=JSON.parse(JSON.stringify(data));
      })
  }

  editPost(post:any)
  {
    localStorage.setItem("postid", post._id.toString());
    this.router.navigate(['editpost']);
  }

  deletePost(post:any)
  {
    if(confirm("Are you sure to delete the Post ?")) {
    console.log(post._id);
    this._postservice.deletePost(post._id)
      .subscribe((data) => {
        this.post = this.post.filter(p => p !== post);
      });
      alert("Post is deleted successfully");
      this.router.navigate(['posts']);
    }
  }

}
