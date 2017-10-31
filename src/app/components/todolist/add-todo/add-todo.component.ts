import { Component, Input } from '@angular/core';

import { Todo } from '../../../pages/todo-list/todo';

import { TodoService } from '../../../pages/todo-list/todo.service';

@Component ({
  selector: 'add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['../../../pages/todo-list/todo-list.component.css']
})

export class AddTodoCommponent {

  /*Variables declaration*/
  public model: Todo;
  @Input() selectedTodo: Todo;

  /*Constructor*/
  constructor (private todoService: TodoService) {}

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
