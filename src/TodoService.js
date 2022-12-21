"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const TodoModal_1 = require("./TodoModal");
//! (M O D E L) - V - C 
class TodoService {
    constructor() {
        this.localStorageKey = 'todoList';
    }
    createTodo(todoItem) {
        var _a;
        debugger;
        const newTodoItem = new TodoModal_1.TodoModal(todoItem);
        const exisitngList = JSON.parse((_a = localStorage.getItem(this.localStorageKey)) !== null && _a !== void 0 ? _a : '[]');
        exisitngList.push(newTodoItem);
        localStorage.setItem(this.localStorageKey, JSON.stringify(exisitngList));
        return newTodoItem;
    }
    getTodo() { }
    getAllTodos() {
        var _a;
        return JSON.parse((_a = localStorage.getItem(this.localStorageKey)) !== null && _a !== void 0 ? _a : '[]');
    }
    editTodo() { }
    deleteTodo(todoKey) {
        console.log('deleteTodo', todoKey);
        const filteredList = this.getAllTodos().filter(todo => todo.todoKey !== todoKey);
        console.log('deleteTodo - 1', filteredList);
        localStorage.setItem(this.localStorageKey, JSON.stringify(filteredList));
    }
}
exports.TodoService = TodoService;
