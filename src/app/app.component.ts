import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>App Works !</p>
    <a routerLink='/viewdetails'>View Details</a>&nbsp; | &nbsp;
    <a routerLink='/about'>About</a>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'ng-lazy-load';
}
