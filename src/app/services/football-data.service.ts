import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FootballDataService {
  private apiUrl = 'https://football-highlights-api.p.rapidapi.com/matches';
  private headers = new HttpHeaders({
    'x-rapidapi-host': 'football-highlights-api.p.rapidapi.com',
    'x-rapidapi-key': '1fe7d2b86dmsh37c8b87897cd301p192317jsn03b40480d851'
  });

  constructor(private http: HttpClient) {}

  getMatches(): Observable<any> {
    const params = {
      date: new Date().toISOString().split('T')[0],  // Formato YYYY-MM-DD
      countryName: 'Argentina'
    };

    return this.http.get(this.apiUrl, { headers: this.headers, params });
  }
}
