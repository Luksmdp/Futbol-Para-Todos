import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchesServiceService {

  private apiUrl = 'https://football-highlights-api.p.rapidapi.com/matches';
  private headers = new HttpHeaders({
    'x-rapidapi-host': 'football-highlights-api.p.rapidapi.com',
    'x-rapidapi-key': 'df7efde52amsh77cddb93fd71795p1b21fcjsndb5989adc208'
  });

  constructor(private http: HttpClient) {}

  getFeaturedMatches(): Observable<any> {
    const params = {
      date: new Date().toISOString().split('T')[0],  // Formato YYYY-MM-DD
      limit: '10',
      countryName: 'Argentina'
    };

    return this.http.get(this.apiUrl, { headers: this.headers, params });
  }

  getMatchesByCountryDate(countryName: string, date: string): Observable<any> {
    const params = {
      date: date || new Date().toISOString().split('T')[0],  // Usar la fecha actual si no se pasa una fecha
      limit: '10',
      countryName: countryName   // Valor predeterminado si falta el país
    };
  
    return this.http.get(this.apiUrl, { headers: this.headers, params });
  }
}
