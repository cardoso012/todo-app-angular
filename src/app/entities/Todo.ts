export class Todo {

    private Id: number;
    private Description: string;
    private Done: boolean;

    constructor(description: string, done: boolean) {
        this.Id = Math.random();
        this.Description = description;
        this.Done = done;
    }

    toggle() {
        this.Done = !this.Done;
    }

    get id() {
        return this.Id;
    }

    get description() {
        return this.Description;
    }

    get done() {
        return this.Done;
    }

}