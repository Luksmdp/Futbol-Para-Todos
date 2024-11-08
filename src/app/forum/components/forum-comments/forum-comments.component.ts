import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ForumService } from '../../services/forum.service';

@Component({
  selector: 'app-forum-comments',
  templateUrl: './forum-comments.component.html',
  styleUrls: ['./forum-comments.component.css']
})
export class ForumCommentsComponent implements OnInit {
  topic: any;
  newComment = { author: '', message: '' };

  constructor(private route: ActivatedRoute, private forumService: ForumService) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.forumService.getTopicById(id).subscribe((data) => {
      this.topic = data;
    });
  }

  addComment(): void {
    if (this.newComment.author && this.newComment.message) {
      this.topic.comments.push({ ...this.newComment });
      this.newComment = { author: '', message: '' };
    }
  }
}