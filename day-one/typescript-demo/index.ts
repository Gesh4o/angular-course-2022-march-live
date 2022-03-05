import { NumberValidator } from "./validator";

const numValidator = new NumberValidator();
console.log(numValidator.validate('ab')); // false
console.log(numValidator.validate('1')); // true
console.log(numValidator.validate('+-123')); // false

// Basic types.
let isDone = false;

let decimal: Object = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

let message: string = '';
let messages: string[] = ['Message 1', 'Message 2'];

// Namespaces, visibility ("export"), classes, enums,
namespace Vehicle {
    const TIER_SIZE = 16;
    export const PLATE = 'AB 0000 XS';

    // Enums could be either string, number or mixed.
    export enum Car {
        Peugeot, // 0
        Citroen, // 1
        Renault // 2
    }

    export enum Car2 {
        Peugeot = 'Peugeot',
        Citroen = 'Citroen',
        Renault = 'Renault'
    }

    export enum Car3 {
        Peugeot = 'Peugeot',
        Citroen = 2,
        Renault = 3
    }

    // Interfaces declare only public properties and methods.
    // Everybody who implements them must have these properties/methods.
    export interface ISuv {
        model: string;
    }

    export class Suv {
        constructor(protected model: string) {
        }

        public drive(): string {
            return `I am driving ${this.model}`;
        }
    }

    export class SmallerSuv extends Suv {

        constructor(model: string, private size: number) {
            super(model)
        }

        drive(): string {
            return super.drive() + ' called from child';
        }

        park(): void {
            console.log(`I am parking "${this.model}" in size ${this.size}`);
        }

    }

    export enum Truck {
        Ford = 'ford',
    }
}

let strictMessage: Vehicle.Car[] = [Vehicle.Car.Peugeot, 4];

// From sli-do question:
function sumNumbers(numbers: number[]) {
    let result: number = 0;
    // for (let num in numbers) { // original code
    for (let num of numbers) { // fixed code
        result += num;
    }

    return result
}
console.log(sumNumbers([5, 5]));
// End of sli-do code.

// Nested types.
const car: {
    model: Vehicle.Car,
    engine: {
        power: number,
    },
    doors: number,
    drive: () => void
} = {
    model: Vehicle.Car.Renault,
    engine: {
        power: 506
    },
    doors: 2,
    drive: function () {
        console.log('');
    }
};

// Casting 'car' to truck is possible with using type 'any'.
// However, this way we will cover-up an issue since the the compiler won't notice that the 'spareTiresNumber' is missing from car.
const truck: {
    engine: {
        power: number,
    },
    doors: number,
    spareTiresNumber: number
} = car as any;


// Demo for inheritance.
const suv = new Vehicle.Suv('Renault');
console.log(suv.drive(), 'SUV');

const smallerSuv = new Vehicle.SmallerSuv('Renault', 4);
console.log(smallerSuv.drive(), 'Small SUV');

// Typed function parameters.
function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}

printLabel({ label: 'Hello world!' });

// Generics.
function identity<Y>(arg: Y): Y {
    return arg;
}
// let output = identity<string>("myString");
// type of output will be 'string'
let output = identity<number>(5);
// type of output will be 'number'

// const set = new Set<string>();
// set.add('');

class KeyValuePair<Key, Value>{
    public key: Key;
    public value: Value;
}

const map = new KeyValuePair<string, number>();

const mapKey: string = map.key;
const mapValye: number = map.value;

// "private" in ts is not really "private". Private properties are still acessible with type casting to 'any'
const alfaRomeo: Vehicle.Suv = new Vehicle.Suv('Alfa Romeo');
console.log('forbidden usage', (alfaRomeo as any).model);

// Interfaces are removed compile time. They are only used during development phase.
// Objects can have a type of interface. It is not necessary to go trough a class (e.g. "new Vehicle.Suv")
const fiat: Vehicle.ISuv = {
    model: 'Fiat'
}

console.log('alfa', alfaRomeo instanceof Vehicle.Suv); // true
console.log('alfa', fiat instanceof Vehicle.Suv); // false
