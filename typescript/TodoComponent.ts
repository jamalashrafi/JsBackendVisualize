import { TodoModal } from "./TodoModal";

export class TodoComponent {

  public todoList: TodoModal[] = [];
  constructor(selector:string) {
    //* Gets Todos from Local storage
    this.todoList = JSON.parse(localStorage.getItem('Todos') ?? "[]");
    const template = `
        <div>
            <input type="text" id="todo-input" placeholder="Enter text here" />
            <button type="button" id="todo-button" >Add Todo</button>
            <ul id="item-list"></ul>
       </div>
        `;

    //-* Process the given "string " and convert to DOM element
    const root = document.querySelector(selector);
    root?.insertAdjacentHTML("beforeend", template);

    const addTodo = document.querySelector("#todo-button") as HTMLButtonElement;
    const itemList = document.querySelector("#item-list") as HTMLUListElement;
    const todoInput = document.querySelector("#todo-input") as HTMLInputElement;

    //- Render the todoList on Dom
    this.todoList.forEach((todo)=>{
      const item = todo.todoItem;
      itemList.insertAdjacentHTML('beforeend', `<li>${item}</li>`)
    })

    addTodo.addEventListener("click", () => {

      const todoInputValue = new TodoModal(todoInput?.value);
      this.todoList.push(todoInputValue);
      localStorage.setItem("Todos", JSON.stringify(this.todoList));


      //Prepare the li element
      const todoItem = `<li>${todoInput?.value}</li>`;

      //Add it
      itemList.insertAdjacentHTML("beforeend", todoItem);

      //Make input null again
      todoInput.value = "";
    });
  }
}

