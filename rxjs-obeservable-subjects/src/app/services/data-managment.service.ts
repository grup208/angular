import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataManagementService {
  constructor() { }

  data:BehaviorSubject<string>=new BehaviorSubject('init value');
  
}
