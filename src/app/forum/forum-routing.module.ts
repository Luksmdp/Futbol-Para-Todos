import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForumListComponent } from './components/forum-list/forum-list.component';
import { ForumCommentsComponent } from './components/forum-comments/forum-comments.component';

const routes: Routes = [
  { path: '', component: ForumListComponent },
  { path: ':id', component: ForumCommentsComponent },
  { path: '**', component: ForumListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumRoutingModule { }
