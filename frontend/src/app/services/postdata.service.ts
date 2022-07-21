import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostdataService {

  constructor(private http:HttpClient) { }

  getPosts(){
    return this.http.get("http://localhost:3000/posts");
  }

  newPost(formData: FormData){
   return this.http.post("http://localhost:3000/posts/insert",formData)
   .subscribe(data =>{console.log(data)})
  }

 getPost(id:any){
   return this.http.get("http://localhost:3000/posts/"+id);
 }

 // delete a Post
 deletePost(id:any)
 {
console.log("id to delete", id);
   return this.http.delete("http://localhost:3000/posts/remove/"+id)

 }
 //update a Post
 editPost(post:any)
 {
   console.log('Post update')
   return this.http.put("http://localhost:3000/posts/update",post)
   .subscribe(data =>{console.log(data)})
 }
 
}