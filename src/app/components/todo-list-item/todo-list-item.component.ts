import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list-item.component.html',
  styleUrl: './todo-list-item.component.css'
})
export class TodoListItemComponent {

  @Input()
  description: string = '';
  
  @Input()
  id: number = 0;
  
  @Input()
  done?: boolean;

  @Output()
  onToggle = new EventEmitter<number>();

  @Output()
  onDelete = new EventEmitter<number>();

  handleToggle(id: number) {
    this.onToggle.emit(id);
  }

  handleDelete(id: number) {
    this.onDelete.emit(id);
  }

}
