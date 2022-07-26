import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserModel } from '../models/UserModel';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  profiles: UserModel[]=[];

  constructor(private _auth:AuthService, private router:Router ) { }

  ngOnInit(): void {
    this._auth.getUsers()
    .subscribe((data)=>{
      console.log(data);
      this.profiles=JSON.parse(JSON.stringify(data));
      }
    )}

  editRole(user:any)
    {
      localStorage.setItem("editRole", user._id.toString())
      this.router.navigate(['/roleupdate']);
    }

  deleteUser(user:any)
    {
      
      if(confirm("Are you sure to delete "+user.username+" ?")) {
        console.log("Implement delete functionality here");
        this._auth.deleteUser(user._id)
          .subscribe((data) => {
            alert("Deleted Successfully");
            this.profiles= this.profiles.filter(p => p !== user)
        
              alert(user.username+" is deleted successfully");
              this.router.navigate(['root/rootprofile']);
          }
          )
        }
   }

}
