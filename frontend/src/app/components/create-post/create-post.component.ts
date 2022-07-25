import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { PostdataService } from 'src/app/services/postdata.service';




@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  secondFormGroup!:FormGroup;
  
  get head(){
    return this.secondFormGroup.controls['head']
  }
  get subhead(){
    return this.secondFormGroup.controls['subhead']
  }
  get image(){
    return this.secondFormGroup.controls['image']
  }
  get body(){
    return this.secondFormGroup.controls['body']
  }

      // body
      get bodyControl() {
        return this.secondFormGroup.get('body') as FormControl;
    }

    get bodyControlValid() {
        return this.bodyControl.touched && !this.bodyControlInvalid;
    }

    get bodyControlInvalid() {
        return (
            this.bodyControl.touched &&
            (this.bodyControl.hasError('required') || this.bodyControl.hasError('body'))
        );
    }
  

      constructor( private _formBuilder: FormBuilder, private _auth:AuthService, private _postserve:PostdataService, private router:Router) {}

        ngOnInit():void {
        
            this.secondFormGroup = this._formBuilder.group({
                head: ['', Validators.required],
                subhead: ['', Validators.required],
                postImagePath: ['',   Validators.required],
                body: ['', Validators.required]
                // ,
                // date : new Date(),
                // authorname: this._auth.getUser()
              });
    }

    createPost(){
        this._postserve.newPost(this.secondFormGroup.value)
        .subscribe(res => {
            console.log("Success!",res)
            alert("Post is added Successfully");
            this.router.navigate(['/posts']);
        },
        err => {
            console.log(this.secondFormGroup.value);
            console.log(err)
            alert("Hi User, Please enter valid details in the post")
          }
        )
        }

}