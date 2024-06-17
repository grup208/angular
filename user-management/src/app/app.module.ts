import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { InterseptorInterceptor } from './interseptor/interseptor.interceptor';
import { SetBackgroundDirective } from './directives/set-backgropund.directive';

@NgModule({
  declarations: [
    AppComponent,
    SetBackgroundDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterseptorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


