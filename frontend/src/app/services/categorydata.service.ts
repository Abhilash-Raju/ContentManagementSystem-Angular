import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategorydataService {


  constructor(private http:HttpClient) { }

  getCategory(id:any){
    return this.http.get("http://localhost:3000/categories/"+id);
  }

  getCategories(){
     return this.http.get("http://localhost:3000/categories");
  }

  newCategory(formData: FormData){
    return this.http.post("http://localhost:3000/categories/insert",formData)
    .subscribe(data =>{console.log(data)})
  }
  // delete a Category
  deleteCategory(id:any)
  {
  console.log("id to delete", id);
    return this.http.delete("http://localhost:3000/categories/remove/"+id)
  }
  
  //update a Category
  editCategory(category:any)
  {
    console.log('Category update')
    return this.http.put("http://localhost:3000/categories/update",category)
    .subscribe(data =>{console.log(data)})
  }

}
