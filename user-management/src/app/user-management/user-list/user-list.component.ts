import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent implements OnInit {
  public users!:Observable<IUser[]>;
  constructor(
    private usersService:UsersService,
    private router:Router
  ){}

  ngOnInit(): void {
    this.users=this.usersService.getUsers();
  }

  editUser(id?:string):void{
    this.router.navigate([`/users/edit/${id}`]);
   
  }

}
