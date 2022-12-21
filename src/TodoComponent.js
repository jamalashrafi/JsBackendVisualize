"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoComponent = void 0;
const TodoService_1 = require("./TodoService");
//! M - V - (C O N T R O L L E R)
class TodoComponent {
    constructor(selector) {
        this.todoList = [];
        const todoServiceObj = new TodoService_1.TodoService();
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
        root === null || root === void 0 ? void 0 : root.insertAdjacentHTML("beforeend", template);
        const addTodo = document.querySelector("#todo-button");
        const itemList = document.querySelector("#item-list");
        const todoInput = document.querySelector("#todo-input");
        //* Render the todoList on Dom
        this.todoList.forEach((todo) => {
            const item = todo.todoItem;
            itemList.insertAdjacentHTML("beforeend", `<li>${item}</li>`);
        });
        addTodo.addEventListener("click", () => {
            //* Writes the updated list to local storgae
            //! R E M O V E D (Now moved the logic to service class)
            // localStorage.setItem("Todos", JSON.stringify(this.todoList));
            const todoInputValue = todoServiceObj.createTodo(todoInput === null || todoInput === void 0 ? void 0 : todoInput.value);
            this.todoList.push(todoInputValue);
            //* Prepare the li element
            const todoItem = `<li id='todo-${todoInputValue.todoKey}'>${todoInput === null || todoInput === void 0 ? void 0 : todoInput.value} <button style="outline:none">X</button></li>`;
            //* Add it
            itemList.insertAdjacentHTML("beforeend", todoItem);
            const liButton = document.querySelector(`#todo-${todoInputValue.todoKey} > button`);
            liButton === null || liButton === void 0 ? void 0 : liButton.addEventListener("click", () => {
                todoServiceObj.deleteTodo(todoInputValue.todoKey);
                location.reload();
            });
            //* Make input null again
            todoInput.value = "";
        });
    }
}
exports.TodoComponent = TodoComponent;
