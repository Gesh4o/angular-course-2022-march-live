import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { Todo } from '../todo-item/todo-item.component';
import { TodoService } from '../todo.service';

import { map, share, skip, take, tap } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: []
})
export class HomeComponent implements OnInit {

  todos: Todo[] = [];

  subscription = new Subscription();

  constructor(private http: HttpClient,
    private todoService: TodoService) { }

  ngOnInit(): void {

    this.todoService.getTodos$().subscribe(todos => console.log(todos));

    this.todoService.getTodos();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  markAllTodosAsCompleted(): void {
    this.todos = this.todos.map(t => ({ title: t.title, isCompleted: true }))
  }

  handleStateChange(todo: Todo): void {
    // const index = this.todos.indexOf(todo);
    // this.todos[index] = {
    //   title: todo.title,
    //   isCompleted: !todo.isCompleted
    // }

    todo.isCompleted = !todo.isCompleted;
  }

  filterByName(event: Event) {
    console.log('Filter was updated');
    this.subscription.add(
      this.todoService.getTodos$()
        .pipe(
          // skip(1),
          // take(1),
          // map((todos) => todos.length),
          // tap((todos) => console.log('loading is done', todos)),


        )
        .subscribe(todos => console.log(todos))
    );

    // const targetInput = event.target as HTMLInputElement;
    // this.todoService.getTodoByTitle(targetInput.value)
    //   .map(() => )
    //   .filter(() => );
  }
}

const prom = new Promise((resolve, reject) => {
  resolve('Result.');
  resolve('Result2.');
});

prom
  .then(
    // .map(() => )
    // .filter(() => );
  )
  .then((res) => console.log(res))
  .catch(err => console.error(err));

const obs = new Observable((subscriber) => {
  subscriber.next('$result.');
  subscriber.next('$result2.');
  subscriber.next('$result3.');

  setTimeout(() => {
    subscriber.next('$result4.')
  }, 1000);

  setTimeout(() => {
    subscriber.next('$result5.')
  }, 10000);
  // subscriver.error('Error from Observable')
})


// setTimeout(() => {
//   const subscription = obs.subscribe({
//     next: (result) => {
//       console.log(result)
//     },
//     error: (err) => {
//       console.error(err)
//     }
//   });

// }, 3000);

const subscription = obs.subscribe({
  next: (result) => {
    console.log(result)
  },
  error: (err) => {
    console.error(err)
  }
});

// if I am about leave page

setTimeout(() => {
  subscription.unsubscribe();
}, 5000);



// let object = {title: 'dsadsa', isCompleted: true};

// childProperty = object;


const intervalCount = interval(1000);
const takeFive = intervalCount.pipe(take(5), share());
takeFive.subscribe(x => console.log('sub1', x));
takeFive.subscribe(x => console.log('sub2', x));

let count = 0;
setInterval(() => count++, 1000);


takeFive.subscribe(
  () => console.log('next'),
  undefined,
  () => console.log('completed')
)

takeFive.subscribe({
  next: () => console.log('next'),
  complete: () => console.log('complete'),
}
)