import { Component, OnInit } from '@angular/core';
import { CategorydataService } from 'src/app/services/categorydata.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  cats:any;

  constructor(private _cat:CategorydataService) { }

  ngOnInit(): void {
    this._cat.allCategory().subscribe((data)=>{
      this.cats=JSON.parse(JSON.stringify(data));
    })
  }

}
