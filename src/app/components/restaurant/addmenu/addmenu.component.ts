import { Http } from '@angular/http';
import { Component, OnInit, Inject } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-addmenu',
  templateUrl: './addmenu.component.html',
  styleUrls: ['./addmenu.component.css']
})
export class AddmenuComponent implements OnInit {
  files:any;
  itemname:any;
  itemtype:any;
  price:any;
  description:any;
  constructor(@Inject (Http) public http:Http,public router:Router) { }
  selectFile($event) {
    this.files = $event.target.files || $event.srcElement.files;
  }
  ngOnInit() {
  }

  AddMenu()
  {
  const formData: any = new FormData();
    formData.append("itemname",this.itemname);
    formData.append("itemtype",this.itemtype);
    formData.append("description",this.description);
    formData.append("price",this.price);
    console.log(localStorage.getItem('hotel_email'));
    var email = localStorage.getItem('email')
    formData.append("hotel_email",email);
  

    formData.append("itemsimg", this.files[0], this.files[0]['name']);
    this.http.post('http://localhost:3000/hotel/addmenu',formData).subscribe(res => 
  {
    console.log(res.json());
      let response = res.json();
      if(response.msg === 'Success')
      {
       alert('Item Added');
      }
      else
      {
        alert('Failed to Add Item')
      }
  })
}

}
