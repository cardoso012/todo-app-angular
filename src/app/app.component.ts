import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { CommonModule } from '@angular/common';
import { InMemoryTodoRepository } from './repositories/InMemoryTodoRepository';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TodoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    {
      provide: 'TodoRepository',
      useClass: InMemoryTodoRepository
    }
  ]
})
export class AppComponent {

}
