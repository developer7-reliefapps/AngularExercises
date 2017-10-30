import { Component, OnInit } from '@angular/core';

import { Todo } from './todo';
import { TODO } from './mock-todolist';

import { TodoService } from './todo.service';


@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit{

/*Variables declaration*/
private todo: Todo;
private todolist: Todo[];
private selectedTodo: Todo;
private newTodo: Todo;
model: Todo;

/*Constructor*/
constructor (
  private todoService: TodoService
) {
  this.todolist = this.todoService.getTodos();
}

/*OnInit implementation*/
ngOnInit () {
this.model = new Todo();
}

/**Display Test**/
get diagnostic() {
  return JSON.stringify(this.selectedTodo);
}


}
