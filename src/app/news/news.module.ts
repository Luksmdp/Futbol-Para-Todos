import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsFeaturedComponent } from './components/news-featured/news-featured.component';


@NgModule({
  declarations: [NewsFeaturedComponent],
  imports: [
    CommonModule,
    NewsRoutingModule
  ]
})
export class NewsModule { }
