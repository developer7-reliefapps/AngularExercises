
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
// routing
import { appRoutes } from './app.routing';
import { LocalDataBaseModule } from '@neoprospecta/angular-local-database';
import { HttpClient } from '@angular/common/http';

// components
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';

//Pipe
import { SafePipe } from './youtube-player/safe-pipe';



@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    YoutubePlayerComponent,
    SafePipe,
    LocalDataBaseModule,
    FormsModule
  ],
  imports: [
    BrowserModule,
    HttpClient,
    RouterModule.forRoot(appRoutes),
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
