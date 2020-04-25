import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay} from 'rxjs/operators';
import {HttpClientTestService, ITodo} from '../http-client-test.service';



@Component({
  selector: 'app-http-client-test',
  templateUrl: './http-client-test.component.html',
  styleUrls: ['./http-client-test.component.scss']
})
export class HttpClientTestComponent implements OnInit {
  todos: ITodo[] = [];
  todoTitle = '';

  loading = false;

  constructor(
    private service: HttpClientTestService
  ) { }

  ngOnInit(): void {
    this.fetchTodos();
  }

  addTodo() {
    if (!this.todoTitle.trim()) {
      return;
    }

    const newTodo: ITodo = {
      title: this.todoTitle,
      completed: false,
    };

    this.service.addTodo(newTodo).subscribe((todo) => {
      this.todos.push(todo);
      this.todoTitle = '';
    });
  }

  fetchTodos() {
    this.loading = true;
    this.service.fetchTodos().subscribe((todos) => {
      this.todos = todos;
      this.loading = false;
    });
  }

  removeTodo(todo: ITodo) {
    this.service.removeTodo(todo).subscribe(() => {
        this.todos = this.todos.filter((item) => item.id !== todo.id);
    });
  }

  completeTodo(todo: ITodo) {
    this.service.completeTodo(todo).subscribe((todoItem) => {
      this.todos.find(
        (foundTodo) => foundTodo.id === todoItem.id).completed = true;
    });
  }
}
