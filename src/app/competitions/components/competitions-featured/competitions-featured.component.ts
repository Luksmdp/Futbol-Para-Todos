import { Component, OnInit } from '@angular/core';
import { Standing } from '../../interfaces/standings.interface';
import { StandingsServiceService } from '../../services/standings-service.service';

@Component({
  selector: 'app-competitions-featured',
  templateUrl: './competitions-featured.component.html',
  styleUrl: './competitions-featured.component.css'
})
export class CompetitionsFeaturedComponent implements OnInit {

  standings: Standing[] = [];
  leagueId: number = 33973;
  season: number = 2024;

  constructor(private standingsService: StandingsServiceService) {}

  ngOnInit() {
    this.fetchStandings();
  }

  fetchStandings() {
    this.standingsService.getStandings(this.leagueId, this.season).subscribe(
      (data) => {
        this.standings = data.groups[0].standings;
      },
      (error) => {
        console.error('Error fetching standings:', error);
      }
    );
  }

}
