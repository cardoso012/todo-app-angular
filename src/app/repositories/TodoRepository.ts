import { Todo } from "../entities/Todo";

export interface TodoRepository {
    create(todo: Todo): Todo;
    list(): Todo[];
    toggle(todoId: number): void;
    remove(todoId: number): void;
}