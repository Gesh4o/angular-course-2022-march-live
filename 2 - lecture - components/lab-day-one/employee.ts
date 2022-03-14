export abstract class Employee {
    salary: number;
    _tasks: string[] = [];

    get tasks() {
        return this.tasks;
    }

    private currentWorkIndex = 0;

    constructor(public name: string, public age: number) {
    }

    work(): void {
        console.log(this.tasks[this.currentWorkIndex]); // undefined
        this.currentWorkIndex = (this.currentWorkIndex + 1) % this.tasks.length;

        return undefined;
    }

    collectSalary(): void {
        console.log(`${this.name} received ${this.calculateSalary()}.`)
    }

    protected abstract calculateSalary();
}

export class Junior extends Employee {
    _tasks: string[] = [`${this.name} is working on a simple task.`];

    calculateSalary(): number {
        return this.salary;
    }
}

export class Senior extends Employee {
    _tasks: string[] = [
        `${this.name} is working on a complicated task.`,
        `${this.name} is taking time off work.`,
        `${this.name} is supervising junior workers.`
    ];

    calculateSalary(): number {
        return this.salary;
    }
}

export class Manager extends Employee {
    _tasks: string[] = [
        `${this.name} scheduled a meeting.`,
        `${this.name} is preparing quarterly report.`,
    ];

    dividend: number;

    protected calculateSalary(): number {
        return this.salary + this.dividend;
    }
}