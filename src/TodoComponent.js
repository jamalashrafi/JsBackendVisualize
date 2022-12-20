"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoComponent = void 0;
const TodoModal_1 = require("./TodoModal");
class TodoComponent {
    constructor(selector) {
        this.todoList = [];
        const template = `
        <div>
            <input type="text" id="todo-input" placeholder="Enter text here" />
            <button type="button" id="todo-button" >Add Todo</button>
            <ul id="item-list"></ul>
       </div>
        `;
        //-* Process the given "string " and convert to DOM element
        const root = document.querySelector(selector);
        root === null || root === void 0 ? void 0 : root.insertAdjacentHTML("beforeend", template);
        const addTodo = document.querySelector("#todo-button");
        const itemList = document.querySelector("#item-list");
        const todoInput = document.querySelector("#todo-input");
        addTodo.addEventListener("click", () => {
            const todoInputValue = new TodoModal_1.TodoModal(todoInput === null || todoInput === void 0 ? void 0 : todoInput.value);
            this.todoList.push(todoInputValue);
            console.log(this.todoList);
            //Prepare the li element
            const todoItem = `<li>${todoInput === null || todoInput === void 0 ? void 0 : todoInput.value}</li>`;
            //Add it
            itemList.insertAdjacentHTML("beforeend", todoItem);
            //Make input null again
            todoInput.value = "";
        });
    }
}
exports.TodoComponent = TodoComponent;
