import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { PostdataService } from 'src/app/services/postdata.service';
import { Post } from '../models/postmodel';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  title:String = 'Posts';
  posts: Post[]=[];

  constructor(private _postservice:PostdataService , private router:Router,public _authservice:AuthService) { }

  ngOnInit(): void {
    this._postservice.getPosts().subscribe((data)=>{
      this.posts=JSON.parse(JSON.stringify(data));
    })
  }

  singlepost(post:any){
    localStorage.setItem("postid", post._id.toString());
    // localStorage.setItem("postcategory", post.category.toString());
    this.router.navigate(['post']);
  }
}
