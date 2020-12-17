import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Router, RouterModule, Routes } from '@angular/router';

const routes:Routes = [ 
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'gallery',
    loadChildren: () => import('./viewdetails/viewdetails.module').then(m => m.ViewdetailsModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
