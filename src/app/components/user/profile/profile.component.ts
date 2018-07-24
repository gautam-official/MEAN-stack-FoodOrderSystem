import { Component, OnInit, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public profile:any;
  public hasResponse:boolean = false;
  constructor(@Inject (Http) public http:Http) { }

  ngOnInit() {
    var role = localStorage.getItem('role');
    var email = localStorage.getItem('email');
    this.http.post('http://localhost:3000/hotel/getProfile',{'email':email,'role':role}).subscribe(res => 
  {
    var data = res.json();
      console.log(data.response[0])
    this.profile = data.response[0];
    this.hasResponse = true;
  })
  }

}
