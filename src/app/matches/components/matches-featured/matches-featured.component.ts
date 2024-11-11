import { Component, OnInit } from '@angular/core';
import { MatchesServiceService } from '../../services/matches-service.service';

@Component({
  selector: 'app-matches-featured',
  templateUrl: './matches-featured.component.html',
  styleUrls: ['./matches-featured.component.css']
})
export class MatchesFeaturedComponent implements OnInit {
  groupedMatches: { [key: string]: any[] } = {}; 

  constructor(private matchesService: MatchesServiceService) {}

  ngOnInit(): void {
    this.loadMatches();
  }

  loadMatches(date: string = '', country: string = 'Argentina'): void {
    this.matchesService.getMatchesByCountryDate(country, date).subscribe(
      (data) => {
        if (data?.data?.length) { // Verificar que hay partidos
          this.groupedMatches = this.groupMatchesByLeague(data.data);
        } else {
          console.warn('No matches found for the selected filters.');
          this.groupedMatches = {}; // Asignar objeto vacío si no hay partidos
        }
      },
      (error) => {
        console.error('Error fetching matches:', error);
      }
    );
  }

  groupMatchesByLeague(matches: any[]): { [league: string]: any[] } {
    return matches.reduce((grouped, match) => {
      const leagueName = match.league.name;
      if (!grouped[leagueName]) {
        grouped[leagueName] = [];
      }
      grouped[leagueName].push(match);
      return grouped;
    }, {} as { [league: string]: any[] });
  }

  onFilterChange(filterData: { date: string; country: string }): void {
    this.loadMatches(filterData.date, filterData.country);
  }

  hasMatches(): boolean {
    return Object.keys(this.groupedMatches).length > 0;
  }

  getMatchStatus(match: any): string {
    const currentDate = new Date();
    const matchDate = new Date(match.date);
    const score = match.state.score?.current || 'No disponible';
    const clock = match.state.clock;
    const description = match.state.description;

    // Verificar si el partido aún no ha comenzado
    if (currentDate < matchDate) {
        return 'No ha comenzado';
    }

    // Verificar si el partido ha terminado
    if (description === 'Finished' || description === 'Finished after penalties') {
        return `Finalizado - ${score}`;
    }

    // Verificar si el partido está en diferentes fases del juego
    if (description === 'First half' || description === 'Second half' || description === 'Halftime') {
        return `${description} - ${score} (Minuto ${clock || 'No disponible'})`;
    }

    // Verificar si el partido está en progreso, pero el reloj es null
    if (description === 'In progress') {
        return `En progreso - ${score} ${clock !== null ? `(Minuto ${clock})` : '(Minuto no disponible)'}`;
    }

    // Verificar si el partido está en juego
    if (description === 'In Play') {
        return `En juego - ${score} (Minuto ${clock})`;
    }

    // Si no hay más información disponible
    return 'Desconocido';
  }







}
