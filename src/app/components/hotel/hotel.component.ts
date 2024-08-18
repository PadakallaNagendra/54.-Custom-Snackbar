import { Component, OnInit } from '@angular/core';
import { HotelsService } from 'src/app/services/hotels.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  constructor(private HotelsService:HotelsService) { }
  ELEMENT_DATA:any[]=[];
  displayedColumns: string[] = ['hotelId', 'hotelName', 'hotelLocation', 'hotelImage','hotelDescription'];
 // dataSource = ELEMENT_DATA;
 dataSource:any[];

  ngOnInit(): void {
    debugger;
    this.HotelsService.getHotels().subscribe(
      (response) =>
      {
        this.ELEMENT_DATA = response;
       this.dataSource  = this.ELEMENT_DATA;
debugger;
      },
      (error) =>
      {
        console.log(error);
      });
  }

}
