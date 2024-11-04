import { Component, OnInit } from '@angular/core';
import { TeamsServiceService } from '../../services/teams-service.service';

@Component({
  selector: 'app-teams-featured',
  templateUrl: './teams-featured.component.html',
  styleUrl: './teams-featured.component.css'
})
export class TeamsFeaturedComponent implements OnInit {

  teams: any[] = [];
  filteredTeams: any[] = [];

  constructor(private teamsService: TeamsServiceService) {}

  ngOnInit(): void {
    this.fetchTeams('Premier League'); // Cargar equipos de la liga por defecto (Premier League)
  }

  fetchTeams(leagueName: string): void {
    this.teamsService.getTeams(leagueName).subscribe(response => {
      this.teams = response.teams.map((team: any) => ({
        id: team.id,
        name: team.name,
        logo: team.crest || 'assets/no_image.png'
      }));
      this.filteredTeams = [...this.teams];
    });
  }

  onFilterTeams(leagueName: string): void {
    this.fetchTeams(leagueName); // Obtener equipos de la liga seleccionada
  }
}
