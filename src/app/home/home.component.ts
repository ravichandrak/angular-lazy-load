import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
      <div class="jumbotron text-center mt-2">
        <h1 class="display-4">
          Welcome to home page!
        </h1>
      </div>
    
  `,
  styles: []
  
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
