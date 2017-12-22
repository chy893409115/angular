import { Component, OnInit } from '@angular/core';
import {MyHttpService} from "../utility/serve/myhttp.serve";
@Component({
    selector: 'storeCart',
    templateUrl: './cart.component.html',
    styleUrls:['assets/css/cart.css']
})

export class CartComponent implements OnInit {
    list:Array<any>=[];
    constructor(private myhttp:MyHttpService) { }

    ngOnInit() {
        this.initData();
     }
    initData(){
       this.myhttp
           .sendeRequest('http://127.0.0.1/wc/data/cart/list.php')
           .subscribe((result:any)=>{
               console.log(result);
               this.list=result.data;
           })
    }

}