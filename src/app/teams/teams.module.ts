import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsFeaturedComponent } from './components/teams-featured/teams-featured.component';
import { TeamsFilterComponent } from './components/teams-filter/teams-filter.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [TeamsFeaturedComponent, TeamsFilterComponent],
  imports: [
    CommonModule,
    TeamsRoutingModule,
    ReactiveFormsModule
  ]
})
export class TeamsModule { }
