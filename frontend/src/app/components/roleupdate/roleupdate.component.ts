import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-roleupdate',
  templateUrl: './roleupdate.component.html',
  styleUrls: ['./roleupdate.component.css']
})
export class RoleupdateComponent implements OnInit {

  userInstance= {
    username:'',
    email:'',
    role:'',
    sub: ''}
  constructor(private _auth:AuthService, private router:Router) { }

  ngOnInit(): void {
    let userId = localStorage.getItem("editRole");
    console.log(userId)
    this._auth.getUser(userId).subscribe((data)=>{
      this.userInstance=JSON.parse(JSON.stringify(data));
      console.log(this.userInstance)
      })
    }
  editRole()
  {    
    this._auth.editRole(this.userInstance);
    alert(this.userInstance.username+ " role is updated successfully");
    this.router.navigate(['/root/rootprofile']);
  }

}
