import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo:'users',
    pathMatch:'full'
  },  
  {
    path:'users',    
    loadChildren:() => import('./user-management/user-management.module').then(m => m.UserManagementModule)   
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
