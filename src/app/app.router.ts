// a-module-rooting
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 引入要用到的组件类
import {NotFoundComponent} from  './utility/notFound/notFound.component';
import {IndexComponent} from  './index/index.component';
import {ListComponent} from './list/list.component';
import{LoginComponent} from './login/login.component';
import {CartComponent} from './cart/cart.component'; 
import{OrderConfirmComponent} from './orderConfirm/orderConfirmcomponent';
import{OrderConfirmStepOneComponent} from './orderConfirm/embed/orderConfirmStepOne.component';
import{OrderConfirmStepTwoComponent} from './orderConfirm/embed/orderConfirmStepTwo.component';
import{OrderConfirmStepThreeComponent} from './orderConfirm/embed/orderConfirmStepThree.component';
import{RegisterComponent} from './register/register.component';

// 配置路由词典
const routes: Routes = [
    { path: '',redirectTo:'/index',pathMatch:'full' },
    {
      path:'orderConfirm',
      component:OrderConfirmComponent,
      children:[
     {path:'',component:OrderConfirmStepOneComponent},
     {path:'stepOne',component:OrderConfirmStepOneComponent},
     {path:'stepTwo',component:OrderConfirmStepTwoComponent},
     {path:'stepThree',component:OrderConfirmStepThreeComponent}
      ]
    },
    {path:'cart',component:CartComponent},
    {path:'register',component:RegisterComponent},
  { path: 'index', component: IndexComponent },
  {path:'list',component:ListComponent},
  {path:'login',component:LoginComponent},
  { path: '**', component: NotFoundComponent },
];

// 将forChild改为forRoot，是给跟模块来设置路由的
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

// 指定跟模块
export class AppRoutingModule { }

// export const routedComponents = [NameComponent];