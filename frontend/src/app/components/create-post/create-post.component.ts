import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostdataService } from 'src/app/services/postdata.service';
import { Post } from '../models/blogmodel';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {


      constructor( private _postserve:PostdataService, private router:Router) {}

      image: any;

      postModel= new Post(0,"","","","","","","","");

        ngOnInit():void {
        }
        
        
        createPost()
        {
          console.log(this.postModel.category)
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