/*import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FootballNewsService {

  constructor(private http: HttpClient) { }

  private apiUrl: string = ;

  getNews(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      catchError ((error) => {
        console.log(error);
        return of(undefined)
      }),
    )
}

}*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { News } from './news.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FootballNewsService {
  private apiUrl = environment.apiUrlNews;
  private headers = new HttpHeaders(environment.apiNewsHeaders);

  constructor(private http: HttpClient) { }

  getNews(): Observable<News[]> {
    return this.http.get<any>(this.apiUrl, { headers: this.headers }).pipe(
      map((response) => response.result || [])
    );
  }
}