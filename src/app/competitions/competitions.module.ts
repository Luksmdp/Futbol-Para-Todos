import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetitionsRoutingModule } from './competitions-routing.module';
import { CompetitionsFeaturedComponent } from './components/competitions-featured/competitions-featured.component';
import { LeagueFilterComponent } from './components/league-filter/league-filter.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CompetitionsFeaturedComponent, LeagueFilterComponent],
  imports: [
    CommonModule,
    CompetitionsRoutingModule,
    FormsModule
  ]
})
export class CompetitionsModule { }
