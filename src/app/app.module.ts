import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from './app.router';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import { AppComponent }  from './app.component';
import {HeaderComponent} from  './utility/header/header.component';
import {FooterComponent} from  './utility/footer/footer.component';
import {NotFoundComponent} from  './utility/notFound/notFound.component';
import {IndexComponent} from  './index/index.component';
import {MyHttpService} from  './utility/serve/myhttp.serve';
import {Carousel} from  "./utility/carousel/carousel.component";
import {Slide} from  "./utility/carousel/slide.component";
import{ListComponent} from "./list/list.component";
import{LoginComponent} from './login/login.component';
import {CartComponent} from './cart/cart.component';
import{OrderConfirmComponent} from './orderConfirm/orderConfirmcomponent';
import{OrderConfirmStepOneComponent} from './orderConfirm/embed/orderConfirmStepOne.component';
import{OrderConfirmStepTwoComponent} from './orderConfirm/embed/orderConfirmStepTwo.component';
import{OrderConfirmStepThreeComponent} from './orderConfirm/embed/orderConfirmStepThree.component';
import{RegisterComponent} from './register/register.component';

@NgModule({
  imports:[
    FormsModule,
    HttpModule ,
    AppRoutingModule,
    BrowserModule ],
  providers:[
    MyHttpService
  ],
  declarations: [
    OrderConfirmStepThreeComponent,
    OrderConfirmStepTwoComponent,
    OrderConfirmStepOneComponent,
    OrderConfirmComponent,
    CartComponent,
    RegisterComponent,
    LoginComponent,
    ListComponent,
    Slide,
    Carousel,
    IndexComponent,
    NotFoundComponent,
    FooterComponent,
    HeaderComponent,
     AppComponent ],
  bootstrap:    [ AppComponent ] 
})
export class AppModule { }
