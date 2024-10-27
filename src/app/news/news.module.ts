import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsFeaturedComponent } from './components/news-featured/news-featured.component';
import { FootballNewsService } from './services/football-news.service';
import { NewsRoutingModule } from './news-routing.module';

@NgModule({
  declarations: [
    NewsFeaturedComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule
  ],
  providers: [FootballNewsService]
})
export class NewsModule { }