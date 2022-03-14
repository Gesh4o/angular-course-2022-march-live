import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './todo-item/todo-item.component';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private cache!: Todo[];

  constructor(private injector: Injector, private httpClient: HttpClient) {
    console.log('TodoService');
  }

  getTodos(): Promise<Todo[]> {
    if (!this.cache) {
      return this.httpClient.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
        .toPromise()
        .then((todos) => {
          this.cache = todos;

          return todos.filter((item, index) => index <= 9);
        })
    }

    return Promise.resolve(this.cache);
  }

  getTodos$(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }
}
