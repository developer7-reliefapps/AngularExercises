import { Injectable } from '@angular/core';

import { Todo } from './todo';
import { TODO } from './mock-todolist';

@Injectable()
export class TodoService{

  /*Method to retrieve the list of todos*/
  getTodos(): Todo[]{
    return TODO;
  }

  /*Method to select a todo and modify it*/
  selectTodo (todo: Todo): Todo {
    return todo;
  }

  /*Method to add a todo element to the list temporarily*/
  moreTodo(newTodo: Todo){
    if(newTodo){
      newTodo.id = this.getTodos().length + 1;
      this.getTodos().push(newTodo);
    }
  }

  /*Remove en element from the list*/
  removeTodo(selectTodo: Todo){
    this.getTodos().splice(selectTodo.id - 1, 1);
  }

}
