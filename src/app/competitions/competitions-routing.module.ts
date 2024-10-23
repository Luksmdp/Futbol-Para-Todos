import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetitionsFeaturedComponent } from './components/competitions-featured/competitions-featured.component';

const routes: Routes = [
  { path: '', component: CompetitionsFeaturedComponent },
  { path: '**', component: CompetitionsFeaturedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompetitionsRoutingModule { }
