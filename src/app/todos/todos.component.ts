import { Component, inject, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { TodoItemComponent } from '../components/todo-item/todo-item.component';
import { FilterTodoPipe } from '../pipes/filter-todo.pipe';

@Component({
  selector: 'app-todos',
  imports: [TodoItemComponent, FormsModule, FilterTodoPipe],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent {
  todoService = inject(TodosService);
  todoItems = signal<Array<Todo>>([]);
  searchTerm = signal('');

  ngOnInit(): void {
      this.todoService.getTodosFromApi().pipe(
        catchError( (err) => {
          console.log(err);
          throw err;
        })
      ).subscribe((todos) => {
        this.todoItems.set(todos);
      })
  }

  updateTodoItem(todoItem: Todo) {
    this.todoItems.update((todos)=>{
      return todos.map(todo =>{
        if(todo.id === todoItem.id){
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo;
      })

    })
  }
  
}
