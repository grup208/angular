import { Component, OnInit } from '@angular/core';
import { DataManagementService } from '../services/data-managment.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  public data!:Observable<string>

  constructor(
    public dataManagementService:DataManagementService
  ){}

  ngOnInit(): void {
   this.data=this.dataManagementService.data
    .pipe(
        map((d:string)=>{
        const newText= d+' modified'
        return newText
        })
      )
   
  }

}
