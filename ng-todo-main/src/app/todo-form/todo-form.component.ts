import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent {
  @Input() id?: any;
  todosForm!: FormGroup;
  buttonText = '';

  constructor(
    public DataService: DataService,
    private fb: FormBuilder,
    private _router: Router
  ) {}
  ngOnInit() {
    this.buttonText = this.id ? 'Update' : 'Add';
    this.todosForm = this.fb.group({
      title: '',
    });
    if (this.id) {
      this.DataService.getTodoById(this.id).subscribe((todo) => {
        this.todosForm.patchValue(todo);
      });
    }
  }
  formAction() {
    if (this.id) {
      this.DataService.updateTodoById(this.id, {
        title: this.todosForm.value.title,
        id: this.id,
        isCompleted: false,
      }).subscribe(() => {
        this._router.navigate(['/todos']);
      });
    } else {
      this.DataService.addTodo(this.todosForm.value.title).subscribe(() => {
        this._router.navigate(['/todos']);
      });
    }
  }
}
