import { Injectable } from '@angular/core';
import { IUser } from '../models/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService { 
   
  constructor() {}  

  user$=new BehaviorSubject<IUser | null>(this.getUser())

  setUser(user:IUser):void{
    localStorage.setItem('app-user',JSON.stringify(user));
    this.user$.next(this.getUser());
  }

  getUser():IUser | null{
    const userStr:string|null=localStorage.getItem('app-user');        
    return userStr? JSON.parse(userStr): userStr
  }

  clearUser():void{
    localStorage.removeItem('app-user')
    this.user$.next(this.getUser());
  }

}
