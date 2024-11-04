import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsFeaturedComponent } from './components/teams-featured/teams-featured.component';
import { TeamDetailComponent } from './components/team-detail/team-detail.component';

const routes: Routes = [
  { path: '', component: TeamsFeaturedComponent },
  { path: ':id', component: TeamDetailComponent },
  { path: '**', component: TeamsFeaturedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
