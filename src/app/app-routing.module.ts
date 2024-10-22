import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MatchesRoutingModule } from './matches/matches-routing.module';
import { NewsRoutingModule } from './news/news-routing.module';
import { TeamsRoutingModule } from './teams/teams-routing.module';
import { CompetitionsRoutingModule } from './competitions/competitions-routing.module';

const routes: Routes = [
  { path: '', component: HomePageComponent }, // Ruta principal para la página de inicio
  { path: 'competiciones', loadChildren: () => import('./competitions/competitions.module').then(m => m.CompetitionsModule) },
  { path: 'noticias', loadChildren: () => import('./news/news.module').then(m => m.NewsModule) },
  { path: 'partidos', loadChildren: () => import('./matches/matches.module').then(m => m.MatchesModule) },
  { path: 'equipos', loadChildren: () => import('./teams/teams.module').then(m => m.TeamsModule) },
  { path: '**', redirectTo: '' } // Redirige a la página principal si no se encuentra la ruta
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MatchesRoutingModule,
    NewsRoutingModule,
    TeamsRoutingModule,
    CompetitionsRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
