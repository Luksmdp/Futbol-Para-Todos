import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ForumService } from '../../services/forum.service';

@Component({
  selector: 'app-forum-comments',
  templateUrl: './forum-comments.component.html',
  styleUrls: ['./forum-comments.component.css']
})
export class ForumCommentsComponent implements OnInit {
  topic: any;
  newComment: { author: string, message: string } = { author: '', message: '' };
  newReply: { author: string, message: string } = { author: '', message: '' };
  replyToCommentId: string | null = null;

  constructor(
    private route: ActivatedRoute, 
    private forumService: ForumService, 
    private router: Router
  ) {}

  ngOnInit(): void {
    const topicId = this.route.snapshot.paramMap.get('id');
    if (topicId) {
      this.loadTopic(topicId);
    }
  }

  loadTopic(topicId: string): void {
    this.forumService.getTopic(topicId).subscribe((topic: any) => {
      this.topic = topic;
    });
  }

  addComment(): void {
    if (this.newComment.author && this.newComment.message) {
      const newComment = { 
        ...this.newComment, 
        id: (this.topic.comments.length + 1).toString(), // El id debe ser un string
        replies: [] 
      };
      this.topic.comments.push(newComment);
      this.forumService.updateComments(this.topic.id, this.topic.comments).subscribe(() => {
        this.loadTopic(this.topic.id);
      });
      this.newComment = { author: '', message: '' };
    }
  }

  addReply(comment: any): void {
    if (this.newReply.author && this.newReply.message) {
      const reply = { 
        author: this.newReply.author, 
        message: this.newReply.message 
      };
      if (!comment.replies) {
        comment.replies = [];
      }
      comment.replies.push(reply);
      this.forumService.updateComments(this.topic.id, this.topic.comments).subscribe(() => {
        this.loadTopic(this.topic.id);
      });
      this.newReply = { author: '', message: '' };
      this.replyToCommentId = null;
    }
  }

  cancelReply(): void {
    this.replyToCommentId = null;
  }

  replyToComment(commentId: string): void {
    this.replyToCommentId = this.replyToCommentId === commentId ? null : commentId;
  }

  goBack(): void {
    this.router.navigate(['/foro']);
  }
}