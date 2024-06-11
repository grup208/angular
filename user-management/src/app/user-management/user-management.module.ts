import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { CreateEditComponent } from './create-edit/create-edit.component';
import { UserManagementComponent } from './user-management.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { authGuard } from '../guards/auth.guard';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path:'',
    component:UserListComponent    
  },
  {
    path:'edit/:id',
    component:CreateEditComponent    
  },
  {
    path:'create',
    component:CreateEditComponent,
    canActivate:[authGuard]   
  },
 
];



@NgModule({
  declarations: [
    UserListComponent,
    CreateEditComponent,
    UserManagementComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule, 
    SharedModule 
     
  ],
 
})
export class UserManagementModule { }
