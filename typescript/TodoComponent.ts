import { TodoModal } from "./TodoModal";
import { TodoService } from "./TodoService";

//! M - V - (C O N T R O L L E R)
export class TodoComponent {
  public todoList: TodoModal[] = [];
  constructor(selector: string) {
    const todoServiceObj = new TodoService();
    //* Gets Todos from Local storage
    //! R E M O V E D (Now moved the logic to service class)
    // this.todoList = JSON.parse(localStorage.getItem('Todos') ?? "[]");
    this.todoList = todoServiceObj.getAllTodos();

    const template = `
        <div>
            <input type="text" id="todo-input" placeholder="Enter text here" />
            <button type="button" id="todo-button" >Add Todo</button>
            <ul id="item-list"></ul>
       </div>
        `;

    //* Process the given "string " and convert to DOM element
    const root = document.querySelector(selector);
    root?.insertAdjacentHTML("beforeend", template);

    const addTodo = document.querySelector("#todo-button") as HTMLButtonElement;
    const itemList = document.querySelector("#item-list") as HTMLUListElement;
    const todoInput = document.querySelector("#todo-input") as HTMLInputElement;

    //* Render the todoList on Dom
    this.todoList.forEach((todo) => {
      const item = todo.todoItem;
      itemList.insertAdjacentHTML("beforeend", `<li>${item}</li>`);
    });

    addTodo.addEventListener("click", () => {
      //* Writes the updated list to local storgae
      //! R E M O V E D (Now moved the logic to service class)
      // localStorage.setItem("Todos", JSON.stringify(this.todoList));

      const todoInputValue = todoServiceObj.createTodo(todoInput?.value);

      this.todoList.push(todoInputValue);

      //* Prepare the li element
      const todoItem = `<li id='todo-${todoInputValue.todoKey}'>${todoInput?.value} <button style="outline:none">X</button></li>`;

      //* Add it
      itemList.insertAdjacentHTML("beforeend", todoItem);
      const liButton = document.querySelector(
        `#todo-${todoInputValue.todoKey} > button`
      );
      liButton?.addEventListener("click", () => {
        todoServiceObj.deleteTodo(todoInputValue.todoKey);
        location.reload();
      });
      //* Make input null again
      todoInput.value = "";
    });
  }
}
