import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { CompetitionsFeaturedComponent } from './component/competitions-featured/competitions-featured.component';
import { TeamsFeaturedComponent } from './component/teams-featured/teams-featured.component';
import { NewsFeaturedComponent } from './component/news-featured/news-featured.component';
import { MatchesFeaturedComponent } from './component/matches-featured/matches-featured.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
