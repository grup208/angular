import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, tap } from 'rxjs';
import { IUser } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.scss']
})
export class CreateEditComponent implements OnInit{

    public userId?:string;
    public user?:IUser;

    constructor(
      private router:Router,
      private route:ActivatedRoute,
      private userService:UsersService,
      private fb:FormBuilder
    ){}

  ngOnInit(): void {
    this.userId=this.route.snapshot.params['id'];
   // component works in edit mode  
    if(this.userId){
       this.userService.getUser(this.userId).pipe(         
          tap((d:IUser)=>{
            this.user=d;
            console.log(this.user)
            this.form.patchValue(this.user)
          })
       ).subscribe({        
        error:(err)=>console.log(err.status)
       })     
    }
    }

   
    public form:FormGroup=this.fb.group({
      fullName:new FormControl('', [Validators.required]),
      age:new FormControl('', [Validators.required])
    })
    
   

    submit(){
        if(this.form.invalid) return;
        if(this.userId){
          this.userService.edit(this.form.value,this.userId)
          .pipe(
            tap(()=>{this.router.navigate([`/users`])})
           ).subscribe()  
        }
        else{
          this.userService.add(this.form.value)
          .pipe(
            tap(()=>{this.router.navigate([`/users`])})
           ).subscribe()     
         }

    }

}
