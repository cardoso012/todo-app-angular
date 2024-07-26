import { Component, Inject } from '@angular/core';
import { TodoListItemComponent } from '../todo-list-item/todo-list-item.component';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../entities/Todo';
import { TodoRepository } from '../../repositories/TodoRepository';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoListItemComponent, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {

  description: string = '';

  constructor(@Inject('TodoRepository') private repository: TodoRepository){}

  trackById(index: number, item: Todo) {
    return item.id;
  }
  
  create(description: string): void {
    this.repository.create(new Todo(description, false));

    this.description = '';
  }

  list(): Todo[] {
    return this.repository.list();
  }

  toggle(id: number): void {
    this.repository.toggle(id);
  }
  
  remove(id: number): void {
    this.repository.remove(id);
  }

  enterKeyPressed(event: KeyboardEvent) {
    if(event.key === 'Enter') {
      this.create(this.description);
    }
  }

}
