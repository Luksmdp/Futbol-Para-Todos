import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'competiciones', loadChildren: () => import('./competitions/competitions.module').then(m => m.CompetitionsModule) },
  { path: 'noticias', loadChildren: () => import('./news/news.module').then(m => m.NewsModule) },
  { path: 'partidos', loadChildren: () => import('./matches/matches.module').then(m => m.MatchesModule) },
  { path: 'equipos', loadChildren: () => import('./teams/teams.module').then(m => m.TeamsModule) },
  { path: 'foro', loadChildren: () => import('./forum/forum.module').then(m => m.ForumModule) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
