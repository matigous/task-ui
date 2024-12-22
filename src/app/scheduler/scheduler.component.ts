import { Component } from '@angular/core';
import { Todo } from 'src/models/Todo.model';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent {
  public todos: Todo[] = [];

  public addTodo(): void {
    this.todos.push(new Todo(
      this.todos.length + 1,
      'New Task',
      'Description',
      false,
      new Date()
    ));
    this.saveOnLocalStorage();
  }

  public removeTodo(): void {
    this.todos.pop();
    this.saveOnLocalStorage();
  }

  public removeTodoByIndex(index: number): void {
    this.todos.splice(index, 1);
    this.saveOnLocalStorage();
  }

  public toggleDone(todo: Todo): void {
    todo.done = !todo.done;
    this.saveOnLocalStorage();
  }

  public saveOnLocalStorage(): void {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  public loadFromLocalStorage(): void {
    const todos = localStorage.getItem('todos');
    if (todos) {
      this.todos = JSON.parse(todos);
    }
  }
}
