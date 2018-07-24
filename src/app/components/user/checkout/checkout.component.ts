import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  hotelData:any;
  menuItems:any =[];
  ob; 
  itemname;
  email;
  constructor(@Inject (Http) public http:Http,public router:Router) {
  
    this.hotelData = JSON.parse(localStorage.getItem('hotelInfo'));
    this.http.get('http://localhost:3000/hotel/getMenu?hotelemail='+this.hotelData.hotel_email).subscribe(res => 
  {
    var menu = res.json();
      this.menuItems = menu.response;
     console.log(this.menuItems);
  })
   }
   funselect(itemname,email){
     alert(itemname);
     alert(email);
    this.ob={itemname:itemname,email:email};
    this.http.post('http://localhost:3000/hotel/transactions',this.ob).subscribe(res =>res.json());
   }
   checkout(){

    alert("Order Placed");
   }

  ngOnInit() {
  }
  
}
