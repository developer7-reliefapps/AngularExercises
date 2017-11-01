import { Component, Input } from '@angular/core';

import { Todo } from '../../../pages/todo-list/todo';

import { TodoListComponent } from '../../../pages/todo-list/todo-list.component';

import { DisplayAddForm } from '../../../pages/todo-list/DisplayAddForm';

@Component ({
  selector: 'select-todo',
  templateUrl : './select-todo.component.html',
  styleUrls:['../../../pages/todo-list/todo-list.component.css']
})

export class SelectTodoComponent {

  /*Variables declaration*/
  @Input() selectedTodo: Todo;
  @Input() displayAddForm: DisplayAddForm;

  /*Constructor*/
  constructor (private todoListComponent: TodoListComponent) {}

  public close(): void {
    this.selectedTodo = null;
    this.displayAddForm.isVisible = true;
  }

}
