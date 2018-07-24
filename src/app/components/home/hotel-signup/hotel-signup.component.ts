import { Http } from '@angular/http';
import { Component, OnInit ,Inject} from '@angular/core';
import {HttpModule} from '@angular/http'
import { Router } from '@angular/router'
@Component({
  selector: 'app-hotel-signup',
  templateUrl: './hotel-signup.component.html',
  styleUrls: ['./hotel-signup.component.css']
})
export class HotelSignupComponent implements OnInit {
  files:any;
  Hotelname:any;
  email:any;
  Password:any;
  Contact:any;
  Location:any;
  Pincode:any;
  Address:any;

  selectFile($event) {
    this.files = $event.target.files || $event.srcElement.files;
    
  }
  constructor(@Inject (Http) public http:Http,public _router:Router) { }
  onClickSubmit()
  {
  
    const formData: any = new FormData();
    formData.append("hotelname",this.Hotelname);
    formData.append("email",this.email);
    formData.append("password",this.Password);
    formData.append("location",this.Location);
    formData.append("phoneno",this.Contact);
    formData.append("pincode",this.Pincode);
    formData.append("address",this.Address);
    formData.append("hotelimg", this.files[0], this.files[0]['name']);
    this.http.post('http://localhost:3000/hotel/hotelsignup',formData).subscribe(res => {
      console.log(res.json());
      let response = res.json();
      if(response.msg === 'Success')
      {
        this._router.navigate(['/login']);
      }
      else
      {
        alert('Email Already Exists in DB')
      }
    })
  }

  ngOnInit() {
  }

  // Hotelob;
  // name;
  // email;
  // Password;
  // Contact;
  // Location;
  // Pincode;
  // Address;
  // hotelimg;


}


