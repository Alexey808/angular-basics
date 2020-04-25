import { Injectable } from '@angular/core';
import {HttpClient, HttpEventType, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

export interface ITodo {
  completed: boolean;
  title: string;
  id?: number;
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientTestService {
  url = 'https://jsonplaceholder.typicode.com/todos';

  constructor(
    private http: HttpClient
  ) { }

  addTodo(newTodo): Observable<ITodo> {
    const headers: HttpHeaders = new HttpHeaders({
      MyHttpHeaders: 'test header!'
    });

    return this.http.post<ITodo>(this.url, newTodo, {
      headers
    });
  }

  fetchTodos(): Observable<ITodo[]> {
    // добавление нескольких парамсов
    let params: HttpParams = new HttpParams();
    params = params.append('_limit', '4');
    params = params.append('custom', 'anything!');

    return this.http.get<ITodo[]>(`${this.url}`, {
      // params: new HttpParams().set('_limit', '10') // добавление 1 парамса
      params
    }).pipe(
      catchError((error) => {
        /* логика обработки ошибок */
        return throwError(error);
      })
    );
  }

  removeTodo({id}: ITodo): Observable<any> {
    return this.http.delete<void>(`${this.url}/${id}`, {
      observe: 'events'
    }).pipe(
      tap((event) => {
        if (event.type === HttpEventType.Sent) {
          console.log('Событие отправки запроса, Sent', event);
        }
        if (event.type === HttpEventType.Response) {
          console.log('Событие ответа сервара на запрос, Response', event);
        }
      })
    );
  }

  completeTodo({id}: ITodo): Observable<ITodo> {
    return this.http.put<ITodo>(`${this.url}/${id}`, {
      completed: true
    });
  }
}
