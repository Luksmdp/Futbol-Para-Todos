import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchesFeaturedComponent } from './components/matches-featured/matches-featured.component';

const routes: Routes = [
  { path: 'partidos', component: MatchesFeaturedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchesRoutingModule { }
