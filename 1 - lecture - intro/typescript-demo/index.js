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
import { NumberValidator } from "./validator";
var numValidator = new NumberValidator();
console.log(numValidator.validate('ab')); // false
console.log(numValidator.validate('1')); // true
console.log(numValidator.validate('+-123')); // false
// Basic types.
var isDone = false;
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
var message = '';
var messages = ['Message 1', 'Message 2'];
// Namespaces, visibility ("export"), classes, enums,
var Vehicle;
(function (Vehicle) {
    var TIER_SIZE = 16;
    Vehicle.PLATE = 'AB 0000 XS';
    // Enums could be either string, number or mixed.
    var Car;
    (function (Car) {
        Car[Car["Peugeot"] = 0] = "Peugeot";
        Car[Car["Citroen"] = 1] = "Citroen";
        Car[Car["Renault"] = 2] = "Renault"; // 2
    })(Car = Vehicle.Car || (Vehicle.Car = {}));
    var Car2;
    (function (Car2) {
        Car2["Peugeot"] = "Peugeot";
        Car2["Citroen"] = "Citroen";
        Car2["Renault"] = "Renault";
    })(Car2 = Vehicle.Car2 || (Vehicle.Car2 = {}));
    var Car3;
    (function (Car3) {
        Car3["Peugeot"] = "Peugeot";
        Car3[Car3["Citroen"] = 2] = "Citroen";
        Car3[Car3["Renault"] = 3] = "Renault";
    })(Car3 = Vehicle.Car3 || (Vehicle.Car3 = {}));
    var Suv = /** @class */ (function () {
        function Suv(model) {
            this.model = model;
        }
        Suv.prototype.drive = function () {
            return "I am driving ".concat(this.model);
        };
        return Suv;
    }());
    Vehicle.Suv = Suv;
    var SmallerSuv = /** @class */ (function (_super) {
        __extends(SmallerSuv, _super);
        function SmallerSuv(model, size) {
            var _this = _super.call(this, model) || this;
            _this.size = size;
            return _this;
        }
        SmallerSuv.prototype.drive = function () {
            return _super.prototype.drive.call(this) + ' called from child';
        };
        SmallerSuv.prototype.park = function () {
            console.log("I am parking \"".concat(this.model, "\" in size ").concat(this.size));
        };
        return SmallerSuv;
    }(Suv));
    Vehicle.SmallerSuv = SmallerSuv;
    var Truck;
    (function (Truck) {
        Truck["Ford"] = "ford";
    })(Truck = Vehicle.Truck || (Vehicle.Truck = {}));
})(Vehicle || (Vehicle = {}));
var strictMessage = [Vehicle.Car.Peugeot, 4];
// From sli-do question:
function sumNumbers(numbers) {
    var result = 0;
    // for (let num in numbers) { // original code
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) { // fixed code
        var num = numbers_1[_i];
        result += num;
    }
    return result;
}
console.log(sumNumbers([5, 5]));
// End of sli-do code.
// Nested types.
var car = {
    model: Vehicle.Car.Renault,
    engine: {
        power: 506
    },
    doors: 2
};
// Casting 'car' to truck is possible with using type 'any'.
// However, this way we will cover-up an issue since the the compiler won't notice that the 'spareTiresNumber' is missing from car.
var truck = car;
// Demo for inheritance.
var suv = new Vehicle.Suv('Renault');
console.log(suv.drive(), 'SUV');
var smallerSuv = new Vehicle.SmallerSuv('Renault', 4);
console.log(smallerSuv.drive(), 'Small SUV');
// Typed function parameters.
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
printLabel({ label: 'Hello world!' });
// Generics.
function identity(arg) {
    return arg;
}
// let output = identity<string>("myString");
// type of output will be 'string'
var output = identity(5);
// type of output will be 'number'
// const set = new Set<string>();
// set.add('');
var KeyValuePair = /** @class */ (function () {
    function KeyValuePair() {
    }
    return KeyValuePair;
}());
var map = new KeyValuePair();
var mapKey = map.key;
var mapValye = map.value;
// "private" in ts is not really "private". Private properties are still acessible with type casting to 'any'
var alfaRomeo = new Vehicle.Suv('Alfa Romeo');
console.log('forbidden usage', alfaRomeo.model);
// Interfaces are removed compile time. They are only used during development phase.
// Objects can have a type of interface. It is not necessary to go trough a class (e.g. "new Vehicle.Suv")
var fiat = {
    model: 'Fiat'
};
console.log('alfa', alfaRomeo instanceof Vehicle.Suv); // true
console.log('alfa', fiat instanceof Vehicle.Suv); // false
//# sourceMappingURL=index.js.map