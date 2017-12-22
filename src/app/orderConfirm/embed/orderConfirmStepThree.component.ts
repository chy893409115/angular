import { Component, OnInit ,OnDestroy} from '@angular/core';
import {Router} from  '@angular/router';
@Component({
    selector: 'storeOrderConfirmStepThree',
    templateUrl: './orderConfirmStepThree.component.html'
})

export class OrderConfirmStepThreeComponent implements OnInit,OnDestroy {
    count:number=5;
    timer:any;
    constructor(private myRouter:Router) { }

    ngOnInit() {

      this.timer=setInterval(()=>{
         this.count--;
         if(this.count==0){
         clearInterval(this.timer);
         this.timer=null;
         this.myRouter.navigateByUrl('/index');
         }
        },1000 )
     }
    ngOnDestroy(){
        if(this.timer){
             clearInterval(this.timer);
                this.timer=null;
        }
       
    }

}
