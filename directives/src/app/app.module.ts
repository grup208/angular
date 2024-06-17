import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BackgroundRedDirective } from './directives/background-red.directive';
import { NotDirective } from './directives/not.directive';
import { AsteriksDirective } from './directives/asteriks.directive';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundRedDirective,
    NotDirective,
    AsteriksDirective
  ], 
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
