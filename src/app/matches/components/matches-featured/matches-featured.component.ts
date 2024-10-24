import { Component, OnInit } from '@angular/core';
import { MatchesServiceService } from '../../services/matches-service.service';

@Component({
  selector: 'app-matches-featured',
  templateUrl: './matches-featured.component.html',
  styleUrls: ['./matches-featured.component.css']
})
export class MatchesFeaturedComponent implements OnInit {
  groupedMatches: { [key: string]: any[] } = {}; // Inicializar como un objeto vacío

  constructor(private matchesService: MatchesServiceService) {}

  ngOnInit(): void {
    this.loadMatches(); // Cargar partidos al inicializar
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
    const currentTime = new Date().getTime(); // Tiempo actual
    const matchDate = new Date(match.date).getTime(); // Fecha del partido

    // Si el partido está en juego
    if (match.state.clock !== null && match.state.score.current !== null) {
        return `En juego - ${match.state.score.current}`;
    }

    // Si el partido ha terminado
    if (match.state.score.current) {
        return `Finalizado - ${match.state.score.current}`;
    }

    // Si la fecha del partido es futura, entonces no ha comenzado
    if (matchDate > currentTime) {
        return 'No ha comenzado';
    }

    // Para cualquier otro caso
    return 'Estado desconocido';
  }




}
