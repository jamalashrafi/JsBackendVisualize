export class TodoModal {
    private static lastKey = 0;

    public todoKey: number;
    public todoItem: string;
    
    constructor(todoItem: string) {
        this.todoKey = ++TodoModal.lastKey;
        this.todoItem = todoItem;
        
    }
}