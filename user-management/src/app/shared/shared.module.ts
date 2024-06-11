import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsterisksDirective } from './directives/asterisks.directive';



@NgModule({
  declarations: [  
    AsterisksDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AsterisksDirective
  ]
})
export class SharedModule { }
