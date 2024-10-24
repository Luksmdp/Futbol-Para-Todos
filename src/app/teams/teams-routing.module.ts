import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsFeaturedComponent } from './components/teams-featured/teams-featured.component';

const routes: Routes = [
  { path: '', component: TeamsFeaturedComponent },
  { path: '**', component: TeamsFeaturedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
