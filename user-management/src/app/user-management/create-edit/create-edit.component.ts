import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.scss']
})
export class CreateEditComponent implements OnInit{

    public userId?:number;
    public user?:IUser;

    constructor(
      private router:Router,
      private route:ActivatedRoute,
      private userService:UsersService
    ){}

  ngOnInit(): void {
    this.userId=+this.route.snapshot.params['id'];
    console.log(typeof this.userId)
    // component works in edit mode  
    if(this.userId){
       this.userService.getUser(this.userId).subscribe({
        next:(d:IUser)=>this.user=d,
        error:(err)=>console.log(err.status)
       })     
    }
    
   

  }

}
