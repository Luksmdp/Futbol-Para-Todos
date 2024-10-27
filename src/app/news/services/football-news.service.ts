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

@Injectable({
  providedIn: 'root'
})
export class FootballNewsService {
  private apiUrl = 'https://football-news11.p.rapidapi.com/api/news-by-date?date=2024-01-01&lang=en&page=1';
  private headers = new HttpHeaders({
    'x-rapidapi-host': 'football-news11.p.rapidapi.com',
    'x-rapidapi-key': 'c3726e5cbamsh50a32a59c87c4dap18fb0ejsn7b17a7c6ed7a' 
  });

  constructor(private http: HttpClient) { }

  getNews(): Observable<News[]> {
    return this.http.get<any>(this.apiUrl, { headers: this.headers }).pipe(
      map((response) => response.result || [])
    );
  }
}