import { TodoModal } from "./TodoModal";

//! (M O D E L) - V - C 
export class TodoService {
  private localStorageKey = 'todoList'

  createTodo(todoItem: string) : TodoModal {
    debugger;
    const newTodoItem = new TodoModal(todoItem);
    const exisitngList = JSON.parse(localStorage.getItem(this.localStorageKey) ?? '[]');
    exisitngList.push(newTodoItem);
    localStorage.setItem(this.localStorageKey, JSON.stringify(exisitngList));
    return newTodoItem;
  }

  getTodo() {}

  getAllTodos() : TodoModal[] {
    return JSON.parse(localStorage.getItem(this.localStorageKey) ?? '[]') as TodoModal[];
  }

  editTodo() {}

  deleteTodo(todoKey:number) {
    console.log('deleteTodo', todoKey);
    const filteredList = this.getAllTodos().filter(todo => todo.todoKey !== todoKey);
    console.log('deleteTodo - 1', filteredList)
    localStorage.setItem(this.localStorageKey, JSON.stringify(filteredList));
  }
}
