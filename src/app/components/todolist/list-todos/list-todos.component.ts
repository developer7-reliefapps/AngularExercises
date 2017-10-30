import { Component } from '@angular/core';

import { Todo } from '../../../todo-list/todo';
import { TODO } from '../../../todo-list/mock-todolist';

import { TodoService } from '../../../todo-list/todo.service';

@Component ({
  selector: 'list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['../../../todo-list/todo-list.component.css']
})

export class ListTodosComponent {

  /*Variables declaration*/
  public todo: Todo;
  public todolist: Todo[];
  public selectedTodo: Todo;
  public newTodo: Todo;
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
    console.log(todo);
    return this.todoService.getTodo(todo.id);
  }

  /**Delete a todo element from the list**/
  deleteTodo(selectedTodo: Todo){
    this.todoService.removeTodo(selectedTodo);
  }

}
