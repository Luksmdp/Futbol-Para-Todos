import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForumListComponent } from './components/forum-list/forum-list.component';
import { ForumCommentsComponent } from './components/forum-comments/forum-comments.component';
import { ForumRoutingModule } from './forum-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ForumListComponent, ForumCommentsComponent],
  imports: [CommonModule, ForumRoutingModule, FormsModule]
})
export class ForumModule {}