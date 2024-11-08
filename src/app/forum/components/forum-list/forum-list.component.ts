import { Component, OnInit } from '@angular/core';
import { ForumService } from '../../services/forum.service';

@Component({
  selector: 'app-forum-list',
  templateUrl: './forum-list.component.html',
  styleUrls: ['./forum-list.component.css']
})
export class ForumListComponent implements OnInit {
  topics: any[] = [];

  constructor(private forumService: ForumService) {}

  ngOnInit(): void {
    this.forumService.getTopics().subscribe((data) => {
      this.topics = data;
    });
  }
}