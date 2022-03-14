"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var employee_1 = require("./employee");
var junior = new employee_1.Junior('Gosho', 20);
junior.work(); // simple task.
junior.work(); // simple task.
junior.work(); // simple task.
var senior = new employee_1.Senior('Ivaylo', 30);
senior.work(); // complicated task.
senior.work(); // time off.
senior.work(); // supervising.
var manager = new employee_1.Manager('Milen', 40);
manager.work(); // meeting.
manager.work(); // report.
manager.work(); // meeting.
