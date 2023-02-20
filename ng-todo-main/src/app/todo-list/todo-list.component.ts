import { Component } from '@angular/core';
  //import input decorator
  import { Input } from '@angular/core';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
@Input () todos : any;
@Input () isCompleted! : boolean;
filteredList : any = [];

  constructor() { }
  ngOnChanges (): void {


    this.filteredList = this.todos.filter((todo: any) =>{
      return todo.isCompleted === this.isCompleted;
    });


  }
}
