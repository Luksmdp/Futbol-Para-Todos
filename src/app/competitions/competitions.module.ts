import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetitionsRoutingModule } from './competitions-routing.module';
import { CompetitionsFeaturedComponent } from './components/competitions-featured/competitions-featured.component';


@NgModule({
  declarations: [CompetitionsFeaturedComponent],
  imports: [
    CommonModule,
    CompetitionsRoutingModule
  ]
})
export class CompetitionsModule { }
