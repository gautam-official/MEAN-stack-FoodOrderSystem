import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/home/login/login.component';
import { CustSignupComponent } from './components/home/cust-signup/cust-signup.component';
import { HotelSignupComponent } from './components/home/hotel-signup/hotel-signup.component';
import { AboutusComponent } from './components/home/aboutus/aboutus.component';
import { DefaultComponent } from './components/home/default/default.component';
import { AppRoutingModule} from './app-routing.module'

import { UserComponent } from './components/user/user.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { SearchComponent } from './components/user/search/search.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { RestProfileComponent } from './components/restaurant/rest-profile/rest-profile.component';
import { AddmenuComponent } from './components/restaurant/addmenu/addmenu.component';
import { CheckoutComponent } from './components/user/checkout/checkout.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CustSignupComponent,
    HotelSignupComponent,
    AboutusComponent,
    DefaultComponent,
    UserComponent,
    ProfileComponent,
    SearchComponent,
    RestaurantComponent,
    RestProfileComponent,
    AddmenuComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
