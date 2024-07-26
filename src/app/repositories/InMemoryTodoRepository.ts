import { Injectable } from "@angular/core";
import { Todo } from "../entities/Todo";
import { TodoRepository } from "./TodoRepository";

@Injectable({
    providedIn: 'root'
})
export class InMemoryTodoRepository implements TodoRepository{
    
    private todos: Todo[] = [];
    
    create(todo: Todo): Todo {
        this.todos.push(todo);
        return todo;
    }

    list(): Todo[] {
        return this.todos;
    }
    
    toggle(todoId: number): void {
        const todo = this.todos.find((todo) => todo.id === todoId);
        todo?.toggle();
    }
    
    remove(todoId: number): void {
        this.todos = this.todos.filter((todo) => todo.id !== todoId);
    }

}