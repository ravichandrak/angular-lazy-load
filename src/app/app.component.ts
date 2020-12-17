import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a class="navbar-brand mb-0 h1" routerLink='/'>Lazy Load</a>
      
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" routerLink='/gallery'>Gallery <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink='/about'>About</a>
          </li>
        </ul>
      </div>
    </nav>
  
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  
  `,
  styles: []
})
export class AppComponent {
  title = 'ng-lazy-load';
}
