import { Component, OnInit } from '@angular/core';
import {MyHttpService} from "../utility/serve/myhttp.serve";
import {Router} from '@angular/router';

  @Component({
    selector:'storeLogin',
    templateUrl:'./login.component.html',
    styleUrls:['assets/css/login.css'],
})

export class LoginComponent implements OnInit {
    constructor(private myhttp:MyHttpService ,private myRouter:Router) { }
     userName:string="";
     userPwd:string="";
    ngOnInit() { }
    doLogin(){
        // 将用户名和密码发送给给服务器
        // 根据服务器端返回的登录结果来决定：成功-》index
        this.myhttp
            .sendeRequest("http://127.0.0.1/wc/data/user/login.php?uname="+this.userName+"&upwd="+this.userPwd)
            .subscribe((result:any)=>{
            console.log(result);
            if(result.code==200){
                // js跳转
                this.myRouter.navigateByUrl("/index");

            }
        })
    }
}