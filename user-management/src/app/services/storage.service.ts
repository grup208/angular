import { Injectable } from '@angular/core';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class StorageService { 
   
  constructor() { }

  setUser(user:IUser):void{
    localStorage.setItem('app-user',JSON.stringify(user))
  }

  getUser():IUser | null{
    const userStr:string|null=localStorage.getItem('app-user');        
    return userStr? JSON.parse(userStr): userStr
  }

  clearUser():void{
    localStorage.removeItem('app-user')
  }

}
