"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoModal = void 0;
class TodoModal {
    constructor(todoItem) {
        this.todoKey = ++TodoModal.lastKey;
        this.todoItem = todoItem;
    }
}
exports.TodoModal = TodoModal;
TodoModal.lastKey = 0;
