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
  getTodo (id: number): Todo {
    return TODO.find( todo => {
      return todo.id == id;
    });
  }

  /*Méthode filter pour getTodo : todo.filters*/

  /*Method to add a todo element to the list temporarily*/
  addTodo(newTodo: Todo){
    if(newTodo){
      let todo = Object.assign({}, newTodo);
      todo.id = this.getTodos().length + 1;
      this.getTodos().push(todo);
    }
  }

  /*Remove en element from the list*/
  removeTodo(selectTodo: Todo){
    this.getTodos().splice(selectTodo.id - 1, 1);
  }

}
