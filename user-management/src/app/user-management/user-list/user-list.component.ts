import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, switchMap, tap } from 'rxjs';
import { IUser } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  public users!: IUser[];
  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit(): void {
     this.usersService.getUsers().subscribe((d:IUser[])=>this.users=d);
  }

  editUser(id?: string): void {
    this.router.navigate([`/users/edit/${id}`]);
  }
  
  removeUser(id?: string):void{
    if(id)
    this.usersService.delete(id).pipe(
      switchMap((d)=>this.usersService.getUsers()),
      tap((d)=>this.users=d)    
    ).subscribe({
      // next:()=>alert('remove user with id '+ id),
      error:(error)=>console.log(error.status, error.text)
  })
  }
}
