import { Component, Input, OnInit } from '@angular/core';

import { Todo } from '../../../pages/todo-list/todo';

import { TodoListComponent } from '../../../pages/todo-list/todo-list.component';

@Component ({
  selector: 'select-todo',
  templateUrl : './select-todo.component.html',
  styleUrls:['../../../pages/todo-list/todo-list.component.css']
})

export class SelectTodoComponent implements OnInit {

  /*Variables declaration*/
  @Input() selectedTodo: Todo;
  @Input() isVisible: boolean;

  /*Constructor*/
  constructor (private todoListComponent: TodoListComponent) {

  }

  ngOnInit() {
    setTimeout(() => {
      this.todoListComponent.selectedTodo = this.selectedTodo;
    },5000)
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.todoListComponent.selectedTodo = this.selectedTodo;
    },5000)
  }

  public close(): void {
    this.selectedTodo = null;
    this.isVisible = true;
  }

}
