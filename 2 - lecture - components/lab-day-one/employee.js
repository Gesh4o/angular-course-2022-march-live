"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = exports.Senior = exports.Junior = exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(name, age) {
        this.name = name;
        this.age = age;
        this._tasks = [];
        this.currentWorkIndex = 0;
    }
    Object.defineProperty(Employee.prototype, "tasks", {
        get: function () {
            return this.tasks;
        },
        enumerable: false,
        configurable: true
    });
    Employee.prototype.work = function () {
        console.log(this.tasks[this.currentWorkIndex]); // undefined
        this.currentWorkIndex = (this.currentWorkIndex + 1) % this.tasks.length;
    };
    Employee.prototype.collectSalary = function () {
        console.log("".concat(this.name, " received ").concat(this.calculateSalary(), "."));
    };
    return Employee;
}());
exports.Employee = Employee;
var Junior = /** @class */ (function (_super) {
    __extends(Junior, _super);
    function Junior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._tasks = ["".concat(_this.name, " is working on a simple task.")];
        return _this;
    }
    Junior.prototype.calculateSalary = function () {
        return this.salary;
    };
    return Junior;
}(Employee));
exports.Junior = Junior;
var Senior = /** @class */ (function (_super) {
    __extends(Senior, _super);
    function Senior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._tasks = [
            "".concat(_this.name, " is working on a complicated task."),
            "".concat(_this.name, " is taking time off work."),
            "".concat(_this.name, " is supervising junior workers.")
        ];
        return _this;
    }
    Senior.prototype.calculateSalary = function () {
        return this.salary;
    };
    return Senior;
}(Employee));
exports.Senior = Senior;
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._tasks = [
            "".concat(_this.name, " scheduled a meeting."),
            "".concat(_this.name, " is preparing quarterly report."),
        ];
        return _this;
    }
    Manager.prototype.calculateSalary = function () {
        return this.salary + this.dividend;
    };
    return Manager;
}(Employee));
exports.Manager = Manager;
