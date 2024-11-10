import { Component, OnInit } from '@angular/core';
import { ForumService } from '../../services/forum.service';

@Component({
  selector: 'app-forum-list',
  templateUrl: './forum-list.component.html',
  styleUrls: ['./forum-list.component.css'],
})
export class ForumListComponent implements OnInit {
  topics: any[] = [];
  currentPage: number = 1;
  topicsPerPage: number = 6;
  showAddTopicForm: boolean = false;
  newTopic = { id: "", title: '', description: '', comments: [] };

  constructor(private forumService: ForumService) {}

  ngOnInit(): void {
    this.forumService.getTopics().subscribe((data) => {
      this.topics = data;
    });
  }

  get paginatedTopics(): any[] {
    const startIndex = (this.currentPage - 1) * this.topicsPerPage;
    return this.topics.slice(startIndex, startIndex + this.topicsPerPage);
  }

  changePage(newPage: number): void {
    this.currentPage = newPage;
  }

  get totalPages(): number {
    return Math.ceil(this.topics.length / this.topicsPerPage);
  }

  toggleAddTopicForm(): void {
    this.showAddTopicForm = !this.showAddTopicForm;
  }

  addNewTopic(): void {
    if (this.newTopic.title && this.newTopic.description) {
      const lastId = this.topics.length > 0 ? Math.max(...this.topics.map(topic => Number(topic.id))) : 0;
      const newId = lastId + 1;

      // Crear el nuevo tema con el id como string
      const newTopic = { ...this.newTopic, id: newId.toString(), comments: [] };

      this.forumService.addTopic(newTopic).subscribe((response) => {
        this.topics.unshift(response);  // Para asegurarnos de que se vea primero

        this.showAddTopicForm = false;
        this.newTopic = { id: '', title: '', description: '', comments: [] }; // Reiniciar formulario
      });
    }
  }
}