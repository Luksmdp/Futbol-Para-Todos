import { Component, Output, EventEmitter } from '@angular/core';
import { LeagueOption } from './interfaces/teams.interface';

@Component({
  selector: 'app-teams-filter',
  templateUrl: './teams-filter.component.html',
  styleUrls: ['./teams-filter.component.css'] 
})
export class TeamsFilterComponent {

  @Output() filterTeams = new EventEmitter<string>(); // Emite el nombre de la liga

  leagues = [
    { name: 'Premier League' },
    { name: 'Bundesliga' },
    { name: 'La Liga' },
    { name: 'Serie A' },
    { name: 'Ligue 1' }
  ];

  selectedLeagueName = this.leagues[0].name; // Cambia a nombre

  onFilterClick(): void {
    this.filterTeams.emit(this.selectedLeagueName); // Emitir el nombre de la liga seleccionada
  }


}
