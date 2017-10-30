import { Component, Input } from '@angular/core';

import { Todo } from '../../../todo-list/todo';
import { TODO } from '../../../todo-list/mock-todolist';

import { TodoService } from '../../../todo-list/todo.service';

@Component ({
  selector: 'select-todo',
  templateUrl : './select-todo.component.html',
  styleUrls:['../../../todo-list/todo-list.component.css']
})

export class SelectTodoComponent {

  /*Variables declaration*/
  @Input() selectedTodo: Todo;

  /*Constructor*/
  constructor (
    private todoService: TodoService
  ) {
  }

}
