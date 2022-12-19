class TodoComponent {
  constructor(selector) {
    const template = `
        <div>
            <input type="text" id="todo-input" placeholder="Enter text here" />
            <button type="button" id="todo-button" >Add Todo</button>
            <ul id="item-list"></ul>
       </div>
        `;

    //-* Process the given "string " and convert to DOM element
    const root = document.querySelector(selector);
    root.insertAdjacentHTML("beforeend", template);

    const addTodo = document.querySelector("#todo-button");
    const itemList = document.querySelector("#item-list");
    const todoInput = document.querySelector("#todo-input");

    addTodo.addEventListener("click", () => {
      //Prepare the li element
      const todoItem = `<li>${todoInput.value}</li>`;

      //Add it
      itemList.insertAdjacentHTML("beforeend", todoItem);

      //Make input null again
      todoInput.value = "";
    });
  }
}

module.exports = TodoComponent;
