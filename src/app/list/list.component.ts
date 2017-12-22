import { Component, OnInit } from '@angular/core';
import {MyHttpService} from "../utility/serve/myhttp.serve";


@Component({
    selector: 'storeList',
    templateUrl: './list.component.html',
    styleUrls:['assets/css/products.css'],
})

export class ListComponent implements OnInit {
    pageCount:number=0;
    list:Array<any>=[];
    nowPage:number=1;
    pagesList:Array<any>=[];
    page:Array<any>=[];
    constructor(private myhttp:MyHttpService) { }

    ngOnInit() { 
        this.initData();
    }
    initData(){
     this.myhttp
         .sendeRequest('http://127.0.0.1/wc/data/product/list.php?pno='+this.nowPage)
         .subscribe((result:any)=>{
        //  result 中的pageCount pno
        // 列表总共有几页
         this.pageCount=result.pageCount;
        //  总数据
         this.list=result.data;
         console.log(result);
         for(var i=0;i<this.pageCount;i++){
           this.pagesList.push(i);
  
         }
     })
    }
    changePage(isNext:boolean){
      let page:any=this.nowPage;
      if(isNext){
        page++;
        if(page>this.pageCount){
         return;
        }
    }else{
        page++;
        if(page<0){
         return ;
        }
    }
    this.loadPage(page);
    }
    // 给页码指定加载的数据
    loadPage(pno:number){
        this.nowPage=pno;
      this.myhttp
          .sendeRequest('http://127.0.0.1/wc/data/product/list.php?pno='+pno)
          .subscribe((result:any)=>{
             console.log(result);
             this.list=result.data;
 
      })

    }
    // 添加产品到购物车
   addToCart(index:number){
    this.myhttp
        .sendeRequest('http://127.0.0.1/wc/data/cart/add.php?lid='+this.list[index].lid+"&buyCount=1")
        .subscribe((result:any)=>{
          if(result.code==200){
           console.log('添加成功');
          }    
        })
   }
}