import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {
  todos : any = [];
constructor(public dataService: DataService) {

}

ngOnInit() {

this.dataService.getTodos().subscribe((todos) => {
this.todos = todos as any[];
});
}
}
