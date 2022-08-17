import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CategorydataService } from 'src/app/services/categorydata.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  cats:any;

  constructor(private _cat:CategorydataService,public _auth:AuthService) { }

  ngOnInit(): void {
    this._cat.allCategory().subscribe((data)=>{
      this.cats=JSON.parse(JSON.stringify(data));
    })
  }

}
