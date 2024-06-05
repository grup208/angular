import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../models/user';
@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers():Observable<IUser[]>{
   return this.http.get<IUser[]>('http://localhost:3000/users')
  }

  getUser(id:number):Observable<IUser>{
    return this.http.get<IUser>(`http://localhost:3000/users/${id}`)
   }

  add(user:IUser):Observable<IUser>{
    return this.http.post<IUser>('http://localhost:3000/users',user)
  }

  edit(user:IUser, id:number):Observable<IUser>{
    return this.http.put<IUser>(`http://localhost:3000/users/${id}`,user)
  }

  delete(id:number):Observable<any>{
    return this.http.delete<any>(`http://localhost:3000/users/{id}`)
  }



}
