import { TODO } from './mock-todo';
import { Todo } from './todo';
import { Component, OnInit } from '@angular/core';
import { LocalDataBaseService } from '@neoprospecta/angular-local-database';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  title = 'Todo list';
  todolist = TODO;
  selectTodo: Todo;
  todo: Todo;

  todoForm = {
    name: this.todo.name,
    place: this.todo.place,
    time: this.todo.time
  };

  onSelect(todo: Todo): void {
    this.selectTodo = todo;
  }

  constructor(
    private localDatabaseService : LocalDataBaseService,
    private http: HttpClient
  ) { }

  public add(todo: Todo){

  }

  ngOnInit() {
  }

}
