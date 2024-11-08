import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForumService {
  private apiUrl = 'http://localhost:3000/topics';

  constructor(private http: HttpClient) { }

  getTopics(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      tap((response) => console.log('Topics: ', response)) // Verifica la respuesta aquí
    );
  }

  getTopicById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  updateComments(topicId: number, comments: any[]): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${topicId}`, { comments });
  }
  
}