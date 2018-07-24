import { Component, OnInit, Inject } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule, Http } from "@angular/http";
import { Router } from '@angular/router';
@Component({
  selector: 'app-cust-signup',
  templateUrl: './cust-signup.component.html',
  styleUrls: ['./cust-signup.component.css']
})
export class CustSignupComponent implements OnInit {

  constructor(@Inject (Http) public http:Http,public router:Router) {}
  files:any;
  username:any;
  Email:any;
  Password:any;
  ContactNumber:any;
  Location:any;
  Pincode:any;
  Address:any;

  selectFile($event) {
    this.files = $event.target.files || $event.srcElement.files;
  }
  ngOnInit() {
  }
  // HotelName;
  // Email;
  // Password;
  // ContactNumber;
  // Location;
  // Pincode;
  // Address;
  // custimg;
  onClickSubmit(data)
  {
    const formData: any = new FormData();
    formData.append("name",this.username);
    formData.append("email",this.Email);
    formData.append("password",this.Password);
    formData.append("location",this.Location);
    formData.append("contactno",this.ContactNumber);
    formData.append("pincode",this.Pincode);
    formData.append("address",this.Address);
    formData.append("custimg", this.files[0], this.files[0]['name']);
    this.http.post('http://localhost:3000/hotel/customersignup',formData).subscribe(res => {
      console.log(res.json());
            let response = res.json();
            if(response.msg === 'Success')
            {
              this.router.navigate(['/login']);
            }
            else
            {
              alert('Email Already Exists in DB')
           }
    })
//     this._customer.customerSignup(formData).subscribe(res => {
//       console.log(res.json());
//       let response = res.json();
//       if(response.msg === 'Success')
//       {
//         this._router.navigate(['/login']);
//       }
//       else
//       {
//         alert('Email Already Exists in DB')
//       }
//     })
// }
 

  }

}
