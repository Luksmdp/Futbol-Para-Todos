import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsFeaturedComponent } from './components/news-featured/news-featured.component';

const routes: Routes = [
  { path: '', component: NewsFeaturedComponent },
  { path: '**', component: NewsFeaturedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
