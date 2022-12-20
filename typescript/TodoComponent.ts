import { TodoModal } from "./TodoModal";

export class TodoComponent {

  public todoList: TodoModal[] = [];
  constructor(selector:string) {
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

    addTodo.addEventListener("click", () => {
      
      const todoInputValue = new TodoModal(todoInput?.value);
      this.todoList.push(todoInputValue);
      console.log(this.todoList);


      //Prepare the li element
      const todoItem = `<li>${todoInput?.value}</li>`;

      //Add it
      itemList.insertAdjacentHTML("beforeend", todoItem);

      //Make input null again
      todoInput.value = "";
    });
  }
}

