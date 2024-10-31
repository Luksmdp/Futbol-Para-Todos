import { Component, OnInit } from '@angular/core';
import { FootballNewsService } from '../../news/services/football-news.service';
import { News } from '../../news/services/news.model';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})


export class HomePageComponent implements OnInit {
  featuredNews: News | null = null; // Cambia a null inicialmente

  constructor(private newsService: FootballNewsService) { }

  ngOnInit(): void {

    

    this.newsService.getNews().subscribe(
      data => {
        if (data && data.length > 0) {
          this.featuredNews = data[0]; // Obtén la primera noticia
          console.log('Contenido de html_content:', this.featuredNews.html_content);
        }
      },
      error => {
        console.error('Error al obtener la noticia destacada:', error);
      }
    );
  }

  cleanHtml(html: string): string {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = html;
    return tempElement.innerText || tempElement.textContent || '';
  }
}
