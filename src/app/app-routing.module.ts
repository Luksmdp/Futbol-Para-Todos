import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './component/home-page/home-page.component';
import { NewsFeaturedComponent } from './component/news-featured/news-featured.component';
import { CompetitionsFeaturedComponent } from './component/competitions-featured/competitions-featured.component';
import { MatchesFeaturedComponent } from './component/matches-featured/matches-featured.component';
import { TeamsFeaturedComponent } from './component/teams-featured/teams-featured.component';

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
