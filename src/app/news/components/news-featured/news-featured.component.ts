import { Component, OnInit } from '@angular/core';
import { News } from '../../services/news.model';
import { FootballNewsService } from '../../services/football-news.service';

@Component({
  selector: 'app-news-featured',
  templateUrl: './news-featured.component.html',
  styleUrls: ['./news-featured.component.css']
})
export class NewsFeaturedComponent implements OnInit {
  newsList: News[] = [];

  constructor(private newsService: FootballNewsService) { }

  ngOnInit(): void {
    this.newsService.getNews().subscribe(
      data => {
        this.newsList = data;
        console.log('Datos recibidos:', this.newsList); 
      },
      error => {
        console.error('Error al obtener noticias:', error); 
      }
    );
  }
}