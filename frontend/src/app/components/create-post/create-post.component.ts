import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategorydataService } from 'src/app/services/categorydata.service';
import { PostdataService } from 'src/app/services/postdata.service';
import { Post } from '../models/postmodel';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {


      constructor( private _postserve:PostdataService, private router:Router,private _cat:CategorydataService) {}

      image: any;
      message='';
      className=""
      cats:any;


      postModel= new Post(0,"","","","","","","","");

        ngOnInit():void {
          this._cat.allCategory().subscribe((data)=>{
            this.cats=JSON.parse(JSON.stringify(data));
          })
        }
        
        
        createPost()
        {
          console.log(this.postModel.category)
        this._postserve.newPost(this.postModel)
        .subscribe(
          (res:any) =>{
            if(res.success){
              this.message='Post is created'          
              console.log(this.message)
              this.className='alert alert-success'
              // alert("Post Created ")
              this.router.navigate(['/posts']);
          }else 
          {
            this.message=res.message;
           //alert("Post already exist or fields are empty")
            console.log(this.message);
            this.className='alert alert-danger'
            setTimeout(function(){
              window.location.reload();
           }, 3000);     
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
        }

        onImageSelect(event: any){
            const image=event.target.files[0];
            this.image = image;
          }

        getclassName(){
          return this.className;
        }

}