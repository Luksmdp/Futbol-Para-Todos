import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ForumModule } from './forum/forum.module';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CommonModule,
    ForumModule 
  ],
  bootstrap: [AppComponent],
  providers: [provideHttpClient()]
})
export class AppModule { }
