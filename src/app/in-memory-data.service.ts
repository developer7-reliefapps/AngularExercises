import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Todo } from './pages/todo-list/todo';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const TODO: Todo[] = [
      {id: 1, name: 'shopping', place: 'Anjoma', time : '10:00'},
      {id: 2, name: 'cooking', place: 'kitchen', time : '12:00'},
      {id: 3, name: 'dishes', place: 'kitchen', time : '11:30'},
      {id: 4, name: 'job', place: 'work', time : '13:00'}
      ];
    return {TODO};
  }
}
