import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
@Input() todo : any;
 isCompleted! : boolean;

/**
 *
 */
constructor( public DataService: DataService) {


}
ngOnInit() {
this.isCompleted = this.todo.isCompleted;
}
onCheckboxChange() {
this.DataService.updateTodoById(this.todo.id, {
title: this.todo.title,
id: this.todo.id,
isCompleted: this.isCompleted,
description: this.todo.description,
}).subscribe((data) => {
});
}


deleteTodo(id : number){
this.DataService.deleteTodoById(id).subscribe((todo) => {
})
}
}
