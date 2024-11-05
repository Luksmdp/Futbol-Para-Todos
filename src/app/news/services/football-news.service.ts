import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { News } from './news.model';
import { environment } from '../../../environments/environment';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class FootballNewsService {
  private apiUrl = environment.apiUrlNews;
  private headers = new HttpHeaders(environment.apiNewsHeaders);

  constructor(private http: HttpClient) { }

  getNews(): Observable<News[]> {
    const currentDate = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');
    return this.http.get<any>(this.apiUrl, {
      headers: this.headers,
      params: { date: currentDate }
    }).pipe(
      map((response) => {
        // Transformar la fecha antes de devolver los resultados
        return response.result.map((newsItem: News) => {
          const [datePart, timePart] = newsItem.published_at.split(' ');
          const [day, month, year] = datePart.split('-');
          const formattedDate = new Date(+year, +month - 1, +day, ...timePart.split(':').map(Number));
          
          return {
            ...newsItem,
            published_at: formattedDate // Convertir a objeto Date
          };
        }) || [];
      })
    );
  }

}