import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-auth></app-auth>
  <router-outlet></router-outlet>
  `,
  
})
export class AppComponent {
  title = 'user-management';
}
