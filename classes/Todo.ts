import {User} from "./User";

export class Todo extends User {
    constructor(
        userId: number,
        username: string,
        password: string,
        public id: number,
        public title: string,
        public description: string,
        public deadline: string,
        public readonly created_at: string,
        public category: string,
        public complete: boolean = false,
        public readonly updated_at?: string,
    ) {
        super(userId, username, password);
    }

    displayList(): string {
        return `The Title of this task is :${this.title} \n` +
            `You have to do the following : ${this.description} \n` +
            `The task was created on : ${this.created_at}  and supposed to be completed on ${this.deadline} \n` +
            `This task was updated on : ${this.updated_at} \n` +
            `Task completed : ${this.complete} \n` +
            `This task was created by : ${this.username} \n`;
    }

    setTitle(newTitle: string) {
        return this.title = newTitle;
    }

    getTitleTask(): string {
        return `${this.title}`;
    }

    getDescription(): string {
        return `${this.description}`;
    }

    setDescription(newDescription: string) {
        return this.description = newDescription;
    }

    setDeadline(newDeadline: string) {
        return this.deadline = newDeadline;
    }

    setEmploye(name: string) {
      return this.username=name;
    }

    markAsDone(isTaskCompleted: boolean) {
        return isTaskCompleted;
    }

    removeTask(taskName: string) {

    }

}