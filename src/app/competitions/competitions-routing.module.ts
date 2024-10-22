import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetitionsFeaturedComponent } from './components/competitions-featured/competitions-featured.component';

const routes: Routes = [
  { path: 'competiciones', component: CompetitionsFeaturedComponent }, // Ruta principal para competiciones
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompetitionsRoutingModule { }
