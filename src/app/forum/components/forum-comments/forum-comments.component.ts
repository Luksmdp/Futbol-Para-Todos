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
  newComment = { author: '', message: '' };

  constructor(private router: Router, private route: ActivatedRoute, private forumService: ForumService) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.forumService.getTopicById(id).subscribe((data) => {
      this.topic = data;
    });
  }

  goBack(): void {
    this.router.navigate(['/foro']);
  }

  addComment(): void {
    if (this.newComment.author && this.newComment.message) {
      // Crear un nuevo array de comentarios con el nuevo comentario añadido
      const updatedComments = [...this.topic.comments, { ...this.newComment }];

      // Hacer una solicitud PATCH para actualizar los comentarios del topic
      this.forumService.updateComments(this.topic.id, updatedComments).subscribe(() => {
        // Actualizar los comentarios en la interfaz después de la respuesta
        this.topic.comments = updatedComments;
        this.newComment = { author: '', message: '' };
      });
    }


}}