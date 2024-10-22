import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsFeaturedComponent } from './components/teams-featured/teams-featured.component';


@NgModule({
  declarations: [TeamsFeaturedComponent],
  imports: [
    CommonModule,
    TeamsRoutingModule
  ]
})
export class TeamsModule { }
