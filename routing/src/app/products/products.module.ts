import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { MobileComponent } from './mobile/mobile.component';
import { TvComponent } from './tv/tv.component';
import { RouterModule, Routes } from '@angular/router';
import { SingleProductComponent } from './single-product/single-product.component';
const routes:Routes=[
  {
    path:'',
    component:ProductsComponent,
    children:[
      {
        path:'',
        redirectTo:'mobile',
        pathMatch:'full'
      },
      {
        path:'mobile',
        component:MobileComponent
      },
      {
        path:'mobile/:id',
        component:SingleProductComponent
      },
      {
        path:'tv',
        component:TvComponent
      },
      {
        path:'tv/:id',
        component:SingleProductComponent
      }
    ]
  }
]


@NgModule({
  declarations: [
    ProductsComponent,
    MobileComponent,
    TvComponent,
    SingleProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductsModule { }
