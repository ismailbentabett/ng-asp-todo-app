import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodosComponent } from './todos/todos.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'add-todo', component: AddTodoComponent },
  {path : 'edit-todo/:id', component: EditTodoComponent}
/*   { path: '**', redirectTo: '' }
 */];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
