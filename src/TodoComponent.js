"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoComponent = void 0;
const TodoModal_1 = require("./TodoModal");
class TodoComponent {
    constructor(selector) {
        var _a;
        this.todoList = [];
        //* Gets Todos from Local storage
        this.todoList = JSON.parse((_a = localStorage.getItem('Todos')) !== null && _a !== void 0 ? _a : "[]");
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
        //- Render the todoList on Dom
        this.todoList.forEach((todo) => {
            const item = todo.todoItem;
            itemList.insertAdjacentHTML('beforeend', `<li>${item}</li>`);
        });
        addTodo.addEventListener("click", () => {
            const todoInputValue = new TodoModal_1.TodoModal(todoInput === null || todoInput === void 0 ? void 0 : todoInput.value);
            this.todoList.push(todoInputValue);
            localStorage.setItem("Todos", JSON.stringify(this.todoList));
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
