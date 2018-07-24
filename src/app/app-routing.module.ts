import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { DefaultComponent } from './components/home/default/default.component';
import { LoginComponent } from './components/home/login/login.component';
import { CustSignupComponent } from './components/home/cust-signup/cust-signup.component';
import { HotelSignupComponent } from './components/home/hotel-signup/hotel-signup.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { AddmenuComponent } from './components/restaurant/addmenu/addmenu.component';
import { RestProfileComponent } from './components/restaurant/rest-profile/rest-profile.component';
import { UserComponent } from './components/user/user.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { SearchComponent } from './components/user/search/search.component';
import { CheckoutComponent } from './components/user/checkout/checkout.component';
import { AboutusComponent } from './components/home/aboutus/aboutus.component';

export const routes: Routes = [
    {
        path : '',
        component:HomeComponent,
        children:[
            {
                path:'',
                component:DefaultComponent
            },
            {
                path:'login',
                component:LoginComponent
            },
            {
                path : 'user-signup',
                component:CustSignupComponent
            },
            {
                path:'restaurant-signup',
                component:HotelSignupComponent
            },
            {
                path:'about',
                component:AboutusComponent
            }
        ]
    },
    {
        path:'restaurant',
        component:RestaurantComponent,
        children:[
            {
                path:'',
                component:AddmenuComponent
            },
            {
                path:'profile',
                component:RestProfileComponent
            }
        ]
    },
    {
        path:'user',
        component:UserComponent,
        children:[
            {
                path:'',
                component:ProfileComponent
            },
            {
                path:'search',
                component:SearchComponent
            },
            {
                path:'checkout',
                component:CheckoutComponent
            }
        ]
    },
    {
        path: '**',
        redirectTo: ''
    }
 ];
 
 @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
 })
 export class AppRoutingModule { }
 
