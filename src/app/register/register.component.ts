import { Component, OnInit } from '@angular/core';
import {MyHttpService} from "../utility/serve/myhttp.serve";
@Component({
    selector: 'storeRegister',
    templateUrl: './register.component.html',
    styleUrls:['assets/css/login.css','assets/css/animate.css']
})

export class RegisterComponent implements OnInit {
    uname:string='';
    upwd:string='';
    phone:string='';
    email:string='';
    constructor(private myhttp:MyHttpService) { }

    ngOnInit() { }

    initData(){
       this.myhttp
           .sendeRequest('http://127.0.0.1/data/user/register.php?uname='+this.uname+'&upwd='+this.upwd+'&phone='+this.phone+'&email='+this.email)
           .subscribe((result:any)=>{
           console.log(result);
       })
    }
}