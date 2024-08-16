import { Component, OnInit } from '@angular/core';
import { SipDashboardService } from 'src/app/services/sip-dashboard.service';
import {PeriodicElementModel} from 'src/app/models/PereadicElementModel';

@Component({
  selector: 'app-sip-dashboard',
  templateUrl: './sip-dashboard.component.html',
  styleUrls: ['./sip-dashboard.component.css']
})



export class SipDashboardComponent implements OnInit {

  constructor(private readonly sipdashboardservice:SipDashboardService) { }
 // ELEMENT_DATA:PeriodicElementModel[]=[];
 ELEMENT_DATA:any[]=[];
 displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','location'];
dataSource:any;
  ngOnInit(): void
  {
    debugger;
    this.sipdashboardservice.getsipdashboard().subscribe(
      (response) =>
      {
        debugger;
        this.ELEMENT_DATA = response
       this.dataSource = this.ELEMENT_DATA;
        
      },
      (error) =>
      {
        console.log(error);
      });
  }
  //type script string array declare like this
 

}
