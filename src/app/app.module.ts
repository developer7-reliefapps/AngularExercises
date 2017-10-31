
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
// routing
import { appRoutes } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

// components
import { AppComponent } from './app.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { YoutubePlayerComponent } from './pages/youtube-player/youtube-player.component';
import { CalculatorComponent } from './pages/calculator/calculator.component';

// Sub-components
import { SearchBarComponent } from './components/player/search-bar/search-bar.component';
import { PlaylistComponent } from './components/player/playlist/playlist.component';
import { ViewAreaComponent } from './components/player/view-area/view-area.component';

import { AddTodoCommponent } from './components/todolist/add-todo/add-todo.component';
import { ListTodosComponent } from './components/todolist/list-todos/list-todos.component';
import { SelectTodoComponent } from './components/todolist/select-todo/select-todo.component';

import { KeyboardComponent } from './components/calculator/keyboard/keyboard.component';
import { ResultComponent } from './components/calculator/result/result.component';

//Pipe
import { SafePipe } from './pages/youtube-player/safe-pipe';

// From ToH
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

// Service
import { TodoService } from './pages/todo-list/todo.service';

// Directive
import { DisplayFormDirective } from './pages/todo-list/displayForm.directive';



@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    TodoListComponent,
    YoutubePlayerComponent,
    SearchBarComponent,
    PlaylistComponent,
    ViewAreaComponent,
    AddTodoCommponent,
    ListTodosComponent,
    SelectTodoComponent,
    KeyboardComponent,
    ResultComponent,
    SafePipe,
    DisplayFormDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
