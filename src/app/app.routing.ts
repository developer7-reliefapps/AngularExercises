
import { Routes } from '@angular/router';

// components
import { AppComponent } from './app.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { YoutubePlayerComponent } from './pages/youtube-player/youtube-player.component';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { CachingInterceptor } from './pages/Services/Caching/caching-interceptor';

// Definition of routes
export const appRoutes: Routes = [
  {
    path : 'todolist',
    component: TodoListComponent  // TODO : use appropriated page
  },

  {
    path : 'player',
    component: YoutubePlayerComponent // TODO : use appropriated page
  },
  {
    path : 'calculator',
    component: CalculatorComponent // TODO : use appropriated page

  },
  {
    path : 'services',
    component: CachingInterceptor // TODO : use appropriated page

  },
  {
    path     : '**',
    redirectTo: '',
  }

];
