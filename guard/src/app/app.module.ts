import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProtectedComponent } from './protected/protected.component';
import { PublicComponent } from './public/public.component';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { deactivateGuard } from './guards/deactivate.guard';
import { ProtectedCildComponent } from './protected-cild/protected-cild.component';
import { childGuard } from './guards/child.guard';

const routes:Routes=[  
  {
    path:'public',
    component:PublicComponent
  },
  {
    path:'protected',
    component:ProtectedComponent,
    children:[
      {
        path:'child',
        component:ProtectedCildComponent
      },
    ],
    // canActivate:[authGuard],
    canActivateChild:[childGuard],
    canDeactivate:[deactivateGuard]
  }
]


@NgModule({
  declarations: [
    AppComponent,
    ProtectedComponent,
    PublicComponent,
    ProtectedCildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
