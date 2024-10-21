import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NewsFeaturedComponent } from './components/news-featured/news-featured.component';
import { CompetitionsFeaturedComponent } from './components/competitions-featured/competitions-featured.component';
import { MatchesFeaturedComponent } from './components/matches-featured/matches-featured.component';
import { TeamsFeaturedComponent } from './components/teams-featured/teams-featured.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'noticias', component: NewsFeaturedComponent },
  { path: 'competiciones', component: CompetitionsFeaturedComponent },
  { path: 'partidos', component: MatchesFeaturedComponent },
  { path: 'equipos', component: TeamsFeaturedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
