import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamsServiceService } from '../../services/teams-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrl: './team-detail.component.css'
})
export class TeamDetailComponent implements OnInit{

  team: any;

  constructor(
    private route: ActivatedRoute,
    private teamsService: TeamsServiceService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const teamId = this.route.snapshot.paramMap.get('id');
    if (teamId) {
      this.getTeamDetails(+teamId); // Convertir a número
    }
  }

  getTeamDetails(teamId: number): void {
    this.teamsService.getTeamDetails(teamId).subscribe(response => {
      this.team = response;
      console.log(this.team); // Verifica que estás recibiendo los datos
    }, error => {
      console.error('Error al obtener detalles del equipo:', error); // Manejo de errores
    });
  }

  goBack(): void {
    this.location.back();
  }
}
