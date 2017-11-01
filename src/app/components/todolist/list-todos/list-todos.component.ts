import { Component, Input } from '@angular/core';

import { Todo } from '../../../pages/todo-list/todo';

import { TodoService } from '../../../pages/todo-list/todo.service';

import { DisplayAddForm } from '../../../pages/todo-list/DisplayAddForm';

@Component ({
  selector: 'list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['../../../pages/todo-list/todo-list.component.css']
})

export class ListTodosComponent {

  /*Variables declaration*/
  public selectedTodo: Todo;
  public todoList: Todo[];
  public isDisplayed: boolean;
  public displayAddForm: DisplayAddForm;

  /*Constructor*/
  constructor (private todoService: TodoService) {
    this.todoList= this.todoService.getTodos();
    this.displayAddForm = { isVisible: true };
  }

  /*Methods*/

  /**Display details of selected todo element**/
  onSelect(todo: Todo) {
    this.selectedTodo = todo;
    this.displayAddForm.isVisible = false;
    console.log(todo);
    return this.todoService.getTodo(todo.id);
  }

  /**Delete a todo element from the list**/
  deleteTodo(selectedTodo: Todo){
    this.todoService.removeTodo(selectedTodo);
  }

}
