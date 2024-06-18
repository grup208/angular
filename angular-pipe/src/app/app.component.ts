import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-pipe';

  person1 = { name: 'john', age: 15 };

  name$ = new BehaviorSubject<string>('');

  today = new Date();

  myNumber: number = 0.75;

  myArray: any[] = ['apple', 'banana', 'orange', 'grape', 'mango'];

  myString: string = 'this is a sentence in lowercase.'; 

  myNumbers:number[]=[1,2,3];


  public setName(): void {
    this.name$.next('john Doe');
  }

  public changeArray():void{
    this.myNumbers.push(4);
    this.myNumbers=[...this.myNumbers]
  }
}
