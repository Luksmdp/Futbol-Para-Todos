import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchesRoutingModule } from './matches-routing.module';
import { MatchesFeaturedComponent } from './components/matches-featured/matches-featured.component';
import { HttpClientModule } from '@angular/common/http';
import { MatchesFilterComponent } from './components/matches-filter/matches-filter.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [MatchesFeaturedComponent, MatchesFilterComponent],
  imports: [
    CommonModule,
    MatchesRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class MatchesModule { }
