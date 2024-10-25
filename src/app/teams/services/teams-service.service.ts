import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamsServiceService {

  private apiUrl = environment.apiUrlTeams;
  private headers = new HttpHeaders(environment.apiHeaders);

  constructor(private http: HttpClient) {}

  // Método para obtener los equipos
  getTeams(teamName: string): Observable<any> {
    const params = teamName ? { name: teamName } : undefined;
    console.log('Petición con parámetro:', params); // Depuración
    return this.http.get(this.apiUrl, { headers: this.headers, params });
  }

}

