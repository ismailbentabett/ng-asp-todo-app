import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TodosComponent } from './todos/todos.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
//http client
import { HttpClientModule } from '@angular/common/http';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { TodoFormComponent } from './todo-form/todo-form.component';

//reactive forms
import { ReactiveFormsModule  , FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    TodosComponent,
    AddTodoComponent,
    TodoItemComponent,
    EditTodoComponent,
    TodoFormComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
