import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LeagueData } from '../interfaces/standings.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StandingsServiceService {

  private apiUrl = environment.apiUrlStandings;
  private apiHeaders = environment.apiHeaders;

  constructor(private http: HttpClient) {}

  getStandings(leagueId: number, season: number): Observable<LeagueData> {
    const params = new HttpParams()
      .set('leagueId', leagueId.toString())
      .set('season', season.toString());

    const headers = new HttpHeaders(this.apiHeaders);

    return this.http.get<LeagueData>(this.apiUrl, { params, headers });
  }
}
