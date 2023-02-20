import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss'],
})
export class EditTodoComponent {
  id!: number;
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.params.subscribe((params) => (this.id = params['id']));
  }
}
