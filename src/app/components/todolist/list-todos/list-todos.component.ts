import { Component, Input } from '@angular/core';

import { Todo } from '../../../pages/todo-list/todo';

import { TodoService } from '../../../pages/todo-list/todo.service';

@Component ({
  selector: 'list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['../../../pages/todo-list/todo-list.component.css']
})

export class ListTodosComponent {

  /*Variables declaration*/
  public selectedTodo: Todo;
  public todoList: Todo[];
  public isVisible: boolean;

  /*Constructor*/
  constructor (private todoService: TodoService) {
    this.todoList= this.todoService.getTodos();
    //this.isVisible = true;
  }

  /*Methods*/

  /**Display details of selected todo element**/
  onSelect(todo: Todo) {
    this.selectedTodo = todo;
    console.log(todo);
    this.isVisible = !this.isVisible;
    console.log("listTodo Visiblity",this.isVisible);
    return this.todoService.getTodo(todo.id);
  }

  /**Delete a todo element from the list**/
  deleteTodo(selectedTodo: Todo){
    this.todoService.removeTodo(selectedTodo);
  }

}
