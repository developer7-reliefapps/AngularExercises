import { Component } from '@angular/core';

import { Todo } from '../../../todo-list/todo';
import { TODO } from '../../../todo-list/mock-todolist';

import { TodoService } from '../../../todo-list/todo.service';

@Component ({
  selector: 'add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['../../../todo-list/todo-list.component.css']
})

export class AddTodoCommponent {

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

  /**Add a todo element**/
  addTodo(newTodo: Todo){
    this.todoService.addTodo(newTodo);
    console.log(newTodo);
    console.log(newTodo.name+' '+newTodo.place+' '+newTodo.time);
  }

}
