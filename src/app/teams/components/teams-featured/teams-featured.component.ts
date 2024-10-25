import { Component, OnInit } from '@angular/core';
import { TeamsServiceService } from '../../services/teams-service.service';

@Component({
  selector: 'app-teams-featured',
  templateUrl: './teams-featured.component.html',
  styleUrl: './teams-featured.component.css'
})
export class TeamsFeaturedComponent implements OnInit {

  teams: any[] = [];  // Almacenar equipos

  constructor(private teamsService: TeamsServiceService) {}

  ngOnInit(): void {
    this.loadTeams(''); // Cargar los equipos inicialmente sin filtro
  }

  // Método para cargar los equipos con o sin filtro
  loadTeams(teamName: string): void {
    this.teamsService.getTeams(teamName).subscribe(
      response => {
        this.teams = response.data; // Asignar la respuesta de los equipos al array
      },
      error => {
        console.error('Error al obtener los equipos', error);
      }
    );
  }

  // Método que recibe el evento del componente hijo (teamsFilter)
  onFilterTeams(teamName: string): void {
    console.log('Filtro recibido en componente padre:', teamName); // Verificación
    this.loadTeams(teamName); // Llama al método con el filtro
}


}
