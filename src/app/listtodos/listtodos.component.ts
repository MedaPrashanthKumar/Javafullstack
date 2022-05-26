import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';
export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date,
  ) {

  }
}
@Component({
  selector: 'app-listtodos',
  templateUrl: './listtodos.component.html',
  styleUrls: ['./listtodos.component.css']
})
export class ListtodosComponent implements OnInit {
  todos: Todo[] | undefined;
  message: String | undefined;
  constructor(
    private todoService: TodoDataService, private router: Router
  ) { }

  // todos = [
  //   new Todo(1,'Learn to dance',false,new Date()),
  //   new Todo(2,'Become Expert at Angular',false,new Date()),
  //   new Todo(3,'Visit India',false,new Date()),
  //   // {
  //   //   id: 1,
  //   //   description: 'Learn to Dance'
  //   // },
  //   // {
  //   //   id: 2,
  //   //   description: 'Become Expert in Angular'
  //   // },
  //   // {
  //   //   id: 3,
  //   //   description: 'Become Expert in Java Full Stack '
  //   // },

  // ];



  // todo = {
  //   id: 1,
  //   description: 'Visit to India',
  // }

  ngOnInit(): void {
    this.refreshTodos();
  }

  deleteTodo(id: any) {
    console.log(`delete todo ${id}`)
    this.todoService.deleteTodo('in28minutes', id).subscribe(
      response => {
        console.log(response);
        this.message = `delete of Todo ${id} is Successful!!!!!`
        this.refreshTodos();
      }
    )
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos('in28minutes').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  updateTodo(id: any) {
    console.log(`update todo ${id}`)
    this.router.navigate(['todos',id])
  }

  addTodo() {
    this.router.navigate(['todos',-1])
  }


}
