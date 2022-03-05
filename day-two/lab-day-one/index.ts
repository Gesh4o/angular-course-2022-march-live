import { Employee, Junior, Manager, Senior } from "./employee";

// Doesn't work.
// const generic = new Employee('Misho', 22);

const junior = new Junior('Gosho', 20);

junior.work(); // simple task.
junior.work(); // simple task.
junior.work(); // simple task.

const senior = new Senior('Ivaylo', 30);
senior.work(); // complicated task.
senior.work(); // time off.
senior.work(); // supervising.


const manager = new Manager('Milen', 40);
manager.work(); // meeting.
manager.work(); // report.
manager.work(); // meeting.