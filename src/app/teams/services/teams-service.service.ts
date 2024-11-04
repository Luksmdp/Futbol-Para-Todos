import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamsServiceService {

  private apiUrlTeams = environment.apiUrlTeams;
  private apiUrlTeamsDetail = environment.apiUrlTeamDetail;
  private headers = new HttpHeaders(environment.apiTeamsHeader);

  constructor(private http: HttpClient) {}

  getTeams(leagueCode: string): Observable<any> {
    const leagueCodes: { [key: string]: string } = {
        'Premier League': 'PL',
        'Bundesliga': 'BL1',
        'La Liga': 'PD',
        'Serie A': 'SA',
        'Ligue 1': 'FL1'
    };

    const code = leagueCodes[leagueCode];
    
    if (!code) {
        throw new Error(`No code found for leagueCode: ${leagueCode}`);
    }

    return this.http.get(`${this.apiUrlTeams}${code}/teams`, { headers: this.headers });
  }

  getTeamDetails(teamId: number): Observable<any> {
    return this.http.get(`${this.apiUrlTeamsDetail}${teamId}`, { headers: this.headers }).pipe(
      tap(response => console.log('Response from API:', response))
    );
  }
  

}

