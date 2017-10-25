
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
import { TodoListComponent } from './todo-list/todo-list.component';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';

//Pipe
import { SafePipe } from './youtube-player/safe-pipe';

// From ToH
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { TodoService } from './todo-list/todo.service';



@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    YoutubePlayerComponent,
    SafePipe
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
