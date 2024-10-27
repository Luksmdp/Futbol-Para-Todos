import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MatchesServiceService {

  private apiUrl = environment.apiUrlMatches;
  private headers = new HttpHeaders(environment.apiHeaders);

  constructor(private http: HttpClient) {}

  

  getMatchesByCountryDate(countryName: string, date: string): Observable<any> {
    const params = {
      date: date || new Date().toISOString().split('T')[0],  // Usar la fecha actual si no se pasa una fecha
      limit: '10',
      countryName: countryName   // Valor predeterminado si falta el país
    };
  
    return this.http.get(this.apiUrl, { headers: this.headers, params });
  }
}
