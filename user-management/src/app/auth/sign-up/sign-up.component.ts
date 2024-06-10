import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
import { IUser } from 'src/app/models/user';
import { StorageService } from 'src/app/services/storage.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

   
  public userId?:string;
  public user?:IUser;

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private userService:UsersService,
    private fb:FormBuilder,
    private storageService:StorageService
  ){}


 
  public form:FormGroup=this.fb.group({
    fullName:new FormControl('', [Validators.required]),
    age:new FormControl('', [Validators.required]),    
    email:new FormControl('', [Validators.required]),
    password:new FormControl('', [Validators.required,Validators.minLength(8)]),
  })
  
 

  submit(){    
    console.log(this.form)
      if(this.form.invalid) return;   
      const user=this.form.value;
      user.role='user'
      this.userService.add(user)
      .pipe(        
        tap((user:IUser)=>{
          this.storageService.setUser(user);
          this.router.navigate([`/users`]);
        })
       ).subscribe()     
     
     
  }


}
