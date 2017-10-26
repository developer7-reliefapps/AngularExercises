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

/*Methods*/

/**Display details of selected todo element**/
onSelect(todo: Todo) {
  this.selectedTodo = todo;
  return this.todoService.getTodo(todo.id);
}

/**Add a todo element**/
addTodo(newTodo: Todo){
  this.todoService.addTodo(newTodo);
  console.log(newTodo);
  console.log(newTodo.name+' '+newTodo.place+' '+newTodo.time);
}

/**Delete a todo element from the list**/
deleteTodo(selectedTodo: Todo){
  this.todoService.removeTodo(selectedTodo);
}

/**Display Test**/
get diagnostic() {
  return JSON.stringify(this.selectedTodo);
}


}
