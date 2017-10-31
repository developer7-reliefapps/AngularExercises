import { Component, Input } from '@angular/core';

import { Todo } from '../../../pages/todo-list/todo';

@Component ({
  selector: 'select-todo',
  templateUrl : './select-todo.component.html',
  styleUrls:['../../../pages/todo-list/todo-list.component.css']
})

export class SelectTodoComponent {

  /*Variables declaration*/
  @Input() selectedTodo: Todo;
  @Input() isVisible: boolean;

  /*Constructor*/
  constructor () {
  }

  public close(): void {
    this.selectedTodo = null;
    console.log("selectTodo Visiblity",this.isVisible);
  }

}
