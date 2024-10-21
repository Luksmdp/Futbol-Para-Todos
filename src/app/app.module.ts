import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CompetitionsFeaturedComponent } from './components/competitions-featured/competitions-featured.component';
import { TeamsFeaturedComponent } from './components/teams-featured/teams-featured.component';
import { NewsFeaturedComponent } from './components/news-featured/news-featured.component';
import { MatchesFeaturedComponent } from './components/matches-featured/matches-featured.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    CompetitionsFeaturedComponent,
    TeamsFeaturedComponent,
    NewsFeaturedComponent,
    MatchesFeaturedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
