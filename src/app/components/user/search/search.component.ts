import { Router } from '@angular/router';
import { Component, OnInit, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  location:any;
  HotelsInfo:any=  []
  constructor(@Inject (Http) public http:Http,public router:Router) { }
  search()
  {
    this.HotelsInfo = []
    this.http.get('http://localhost:3000/hotel/getHotels?location='+this.location).subscribe(res =>
  {
    let data = res.json();
  
    if(data.response.length > 0)
    {
      this.HotelsInfo = data.response;
      
    }
  })
  }
  selectedHotel(hotel)
  {
    localStorage.setItem('hotelInfo',JSON.stringify(hotel));
    this.router.navigateByUrl('user/checkout')
  }
  ngOnInit() {
  }

}
