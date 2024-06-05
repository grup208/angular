import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { CreateEditComponent } from './create-edit/create-edit.component';
import { UserManagementComponent } from './user-management.component';
import { RouterModule, Routes } from '@angular/router';

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
    component:CreateEditComponent    
  },
 
];



@NgModule({
  declarations: [
    UserListComponent,
    CreateEditComponent,
    UserManagementComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserManagementModule { }
