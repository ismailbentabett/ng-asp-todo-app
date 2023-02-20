import { Injectable } from '@angular/core';
//http client
import { HttpClient } from '@angular/common/http';
import { Observable , of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient) {}

  getTodos(): Observable<any[]> {

    const todos =  this.httpClient.get('https://localhost:7027/api/Todo') ;

    return todos as Observable<any[]>;
  }

  getTodoById(Id: number): Observable<any[]> {
    return this.httpClient.get(
      'https://localhost:7027/api/Todo/' + Id
    ) as Observable<any[]>;
  }

  addTodo(Title: any): Observable<any[]> {
    return this.httpClient.post(
      'https://localhost:7027/api/Todo',
      {
        id : 0,
        Title: Title,
        description: '',
        IsCompleted : false
      }
    ) as Observable<any[]>;
  }

  updateTodoById(Id: number, Title: any): Observable<any[]> {

    return this.httpClient.put(
      'https://localhost:7027/api/Todo/' + Id,
      {
        id : Id,
        Title: Title.title,
        description: '',
        IsCompleted : Title.isCompleted
      }
    ) as Observable<any[]>;
  }

  deleteTodoById(Id: number): Observable<any[]> {
    return this.httpClient.delete(
      'https://localhost:7027/api/Todo/' + Id
    ) as Observable<any[]>;
  }
}
