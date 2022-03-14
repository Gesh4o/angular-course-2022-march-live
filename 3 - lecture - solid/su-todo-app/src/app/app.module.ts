import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoService } from './todo.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [{
    provide: TodoService,
    useClass: TodoService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }


// root - responsible for all injectable items
//
