import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchesRoutingModule } from './matches-routing.module';
import { MatchesFeaturedComponent } from './components/matches-featured/matches-featured.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [MatchesFeaturedComponent],
  imports: [
    CommonModule,
    MatchesRoutingModule,
    HttpClientModule
  ]
})
export class MatchesModule { }
