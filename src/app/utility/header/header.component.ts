import { Component, OnInit } from '@angular/core';
import {MyHttpService} from '../serve/myhttp.serve';

@Component({
    selector: 'storeHeader',
    templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {
    // 定义一个变量初始化一个值对用户是否登录作出判断默认用户未登录
    isUserLogin:boolean=false;
    uName:string="";
    constructor(private myHttp:MyHttpService) { }
   
    ngOnInit() { 
        this.checkUserLogin;
    }
    checkUserLogin(myUrl:string){
       this.myHttp.
                 sendeRequest('http://127.0.0.1/wc/data/user/session_data.php')
                 .subscribe((result:any)=>{
                console.log(result);
                if(result.uid){
                // 用户已经登录的状态
                this.isUserLogin=true;
                this.uName=result.uname;
                }else{
            //    用户未登录状态
            this.isUserLogin=false;
                }
       })
    }
    logOut(){
      this.myHttp
          .sendeRequest("http://localhost/wc/data/user/logout.php")
          .subscribe((result:any)=>{
              if(result.code==200){
                this.isUserLogin=false;
                this.uName="";
              }
          })
    }
}