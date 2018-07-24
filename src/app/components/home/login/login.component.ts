import { Component, OnInit, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:any;
  Password:any;
  constructor(@Inject (Http) public http:Http,public router:Router) { }
  Login()
  {
    var req = {'email':this.username,'password':this.Password};
    this.http.post('http://localhost:3000/hotel/login',req).subscribe(res => {
      console.log(res.json());
      let response = res.json();
      
      if(response.msg === 'Login Success')
      {
        localStorage.setItem('loggedIn','true');
       
        console.log(response.output[0].role)
        if(response.output[0].role === 'Restaurant')
        {
          localStorage.setItem('email',response.output[0].email);
          localStorage.setItem('role',response.output[0].role)
          this.router.navigateByUrl('/restaurant');
        }
        else if(response.output[0].role === 'Admin')
        {
          
          this.router.navigateByUrl('/dashboard');
        }
        else if(response.output[0].role === 'Customer')
        {
          localStorage.setItem('email',response.output[0].email);
          localStorage.setItem('role',response.output[0].role)
          this.router.navigateByUrl('/user');
        }
       
      }
      else
      {
        alert('User Not Exist or Invalid Credentilas')
      }
    })
   
  
    
  }
  ngOnInit() {
  }

}
