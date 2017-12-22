import { Component, OnInit } from '@angular/core';
import {MyHttpService} from "../utility/serve/myhttp.serve";

@Component({
    selector: 'storeIndex',
    templateUrl: './index.component.html',
    styleUrls:['assets/css/item_cat.css','assets/css/animate.css']
})

export class IndexComponent implements OnInit {
    carouselItems:Array<any>=[];
    newArrivalItems:Array<any>=[];
    recommendedItems:Array<any>=[];
    topSaleItems:Array<any>=[];
//    图片之间的轮播的间隔时间
    private NextPhotoInterval:number=1000;
// 图片之间是否用循环播放
   private noLoopSlides:boolean=false;
// photo
  private slides:Array<any>=[];

    constructor(private myHttp:MyHttpService ) { }

    ngOnInit() { 
        this.initData();
    }
    initData(){
        this.myHttp
            .sendeRequest("http://127.0.0.1/wc/data/product/index.php")
            .subscribe((result:any)=>{
              console.log(result);
              this.carouselItems=result.carouselItems;
              this.newArrivalItems=result.newArrivalItems;
              this.recommendedItems=result.recommendedItems;
              this.topSaleItems=result.topSaleItems;
              console.log(this.topSaleItems);
            //   给轮播图准备数据
            for(var i=0;i<this.carouselItems.length;i++){
             this.slides.push({
                 image:this.carouselItems[i].img
             })

            }
            })
    }
}