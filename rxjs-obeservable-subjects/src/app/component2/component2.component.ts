import { Component } from '@angular/core';
import { DataManagementService } from '../services/data-managment.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component {
  constructor(public dataManagementService:DataManagementService){}

  public setData():void{
    this.dataManagementService.data.next('new value')
  }

}
