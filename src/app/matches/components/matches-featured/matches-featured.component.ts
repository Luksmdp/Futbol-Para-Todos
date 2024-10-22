import { Component, OnInit } from '@angular/core';
import { FootballDataService } from '../../services/football-data.service';

@Component({
  selector: 'app-matches-featured',
  templateUrl: './matches-featured.component.html',
  styleUrls: ['./matches-featured.component.css']
})
export class MatchesFeaturedComponent implements OnInit {
  groupedMatches: { [league: string]: any[] } = {};

  constructor(private footballDataService: FootballDataService) {}

  ngOnInit(): void {
    this.footballDataService.getMatches().subscribe(
      (data) => {
        const matches = data.data;
        matches.forEach((match: any) => {
          const leagueName = match.league.name;
          if (!this.groupedMatches[leagueName]) {
            this.groupedMatches[leagueName] = [];
          }
          this.groupedMatches[leagueName].push(match);
        });
      },
      (error) => {
        console.error('Error fetching matches:', error);
      }
    );
  }
}
