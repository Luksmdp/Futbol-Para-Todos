import { Component, EventEmitter, Output } from '@angular/core';
import { LeagueOption } from '../../interfaces/standings.interface';

@Component({
  selector: 'app-league-filter',
  templateUrl: './league-filter.component.html',
  styleUrl: './league-filter.component.css'
})
export class LeagueFilterComponent {

  @Output() filterChanged = new EventEmitter<{ leagueId: number, season: number }>();

  leagues: LeagueOption[] = [
    { name: 'Argentina', id: 109712 },
    { name: 'Brasil', id: 61205 },
    { name: 'España', id: 119924 },
    { name: 'Italia', id: 115669 },
    { name: 'Francia', id: 52695 },
    { name: 'Inglaterra', id: 33973 }
  ];

  selectedLeague: number = this.leagues[0].id; // Default to England
  selectedSeason: number = 2024;

  seasons: number[] = [2024, 2023, 2022, 2021, 2020];

  onFilterClick() {
    this.filterChanged.emit({
      leagueId: this.selectedLeague,
      season: this.selectedSeason
    });
  }
}
