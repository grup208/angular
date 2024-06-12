import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { BehaviorSubject } from 'rxjs';
import { IUser } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {  
  user$!:BehaviorSubject<IUser | null>
  constructor(
    private storageService:StorageService,
    private router:Router
  ){}

  ngOnInit(): void {
    this.user$=this.storageService.user$
  }

  logout():void{
    this.storageService.clearUser();
    this.router.navigate(['']);
  }
}

