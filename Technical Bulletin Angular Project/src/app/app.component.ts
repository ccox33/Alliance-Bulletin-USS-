import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    Hello! I am an angular application. 
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'my-angular-site';
}
