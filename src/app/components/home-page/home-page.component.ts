import { Component, OnInit } from '@angular/core';
import { FootballNewsService } from '../../news/services/football-news.service';
import { News } from '../../news/services/news.model';
import { MatchesServiceService } from '../../matches/services/matches-service.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})


export class HomePageComponent implements OnInit {
  featuredNews: News | null = null; // Cambia a null inicialmente
  groupedMatches: { [key: string]: any[] } = {};

  links = [
    {
      title: 'Noticias',
      description: 'Mantente informado con las últimas noticias y eventos del mundo del fútbol.',
      route: '/noticias'
    },
    {
      title: 'Partidos',
      description: 'Consulta los próximos partidos, resultados y estadísticas.',
      route: '/partidos'
    },
    {
      title: 'Competiciones',
      description: 'Explora las diferentes ligas y competiciones de fútbol.',
      route: '/competiciones'
    },
    {
      title: 'Equipos',
      description: 'Conoce a los equipos que participan en cada competición.',
      route: '/equipos'
    },
    {
      title: 'Foro',
      description: 'Únete a la comunidad y comparte tu pasión por el fútbol.',
      route: '/foro'
    }
  ];

  constructor(
    private newsService: FootballNewsService,
    private matchService: MatchesServiceService
  ) { }

  ngOnInit(): void {

    

    this.loadTodaysMatches();

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

  loadTodaysMatches() {
    this.matchService.getMatchesHome().subscribe(
      response => {
        if (response && response.data && Array.isArray(response.data)) {
          this.groupedMatches = this.groupMatchesByLeague(response.data);
          console.log('Grouped Matches:', this.groupedMatches);
        } else {
          console.error('Unexpected response format:', response);
        }
      },
      error => console.error('Error loading today\'s matches:', error)
    );
  }

  groupMatchesByLeague(matches: any[]): { [key: string]: any[] } {
    return matches.reduce((groups, match) => {
      const league = match.league.name;
      if (!groups[league]) {
        groups[league] = [];
      }
      groups[league].push(match);
      return groups;
    }, {});
  }

  hasMatches(): boolean {
    return Object.keys(this.groupedMatches).length > 0;
  }

  getMatchStatus(match: any): string {
    return match.state.description || 'Unknown';
  }


  cleanHtml(html: string): string {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = html;
    return tempElement.innerText || tempElement.textContent || '';
  }
}
