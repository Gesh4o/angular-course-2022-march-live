import { ChangeDetectionStrategy, Component, EventEmitter, Injectable, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http'

export interface Todo {
  title: string;
  isCompleted: boolean;
}

@Injectable()
class LocalService {
    count: number = 0;

    constructor() {
      console.log('LocalService');
    }
}



@Component({
  selector: 'soft-uni-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  providers:[LocalService]
})
export class TodoItemComponent implements OnInit {
  count: number = 0;

  @Input() todo!: Todo;

  @Output() completeStateChange: EventEmitter<Todo> = new EventEmitter();

  constructor(private localService: LocalService) { 
  }

  ngOnInit(): void {
  }

  handleCompleteStateChange(todoToChange: Todo): void {
    console.log(this.localService.count++);
    this.completeStateChange.emit(todoToChange);
  }
}




class Calculator {

  // calculateArea(shape: any): number {
  //   if (shape.width && shape.height) {
  //     return shape.width * shape.height;
  //   } else if (shape.base && shape.height) {
  //     return shape.base * shape.height / 2;
  //   } else if (shape.radius) {
  //     return Math.PI * shape.radius * shape.radius;
  //   }

  //   return 0;
  // }

  calculateArea(shape: IShape): number {
    return shape.calculateArea();
  }
}

abstract class Shape implements IShape {
  // some common functionality.

  abstract calculateArea(): number;

  render(): string {
    return `Area: ${this.calculateArea()}`;
  }
}

interface IShape {
  calculateArea(): number;

  render(): string;
}

interface IAngle {
  numberOfAngles(): number;
}

class Rectangle extends Shape implements IAngle {

  constructor(public width: number, public height: number) {
    super();
  }

  calculateArea(): number {
    return this.width * this.height;
  }

  numberOfAngles(): number {
    return 4;
  }
}

class Triangle implements IShape {
  constructor(public base: number, public height: number) {
    // super();
  }

  calculateArea(): number {
    return this.base * this.height / 2;
  }

  numberOfAngles(): number {
    return 4;
  }

  render(): string {
    return '';
  }
}


// class Circle extends Shape {
//   constructor(public radius: number) {
//     super();
//   }

//   calculateArea(): number {
//     return this.radius * this.radius * Math.PI;
//   }

//   numberOfAngles(): number {
//     throw new Error('Circle cannot have angles!');
//   }
// }

const calc = new Calculator();

const obj: IShape = shapeFactory();

const rect = new Rectangle(4, 5);
rect.calculateArea();
rect.render();
rect.numberOfAngles();
const rectShape: Shape = rect;
rectShape.calculateArea();
rectShape.render();
//  rectShape.numberOfAngles(); doesn't work
const angleRect: IAngle = rect;
angleRect.numberOfAngles();


// console.log(shapeFactory().render());
// console.log(shapeFactory().render());
// console.log(shapeFactory().render());
// console.log(shapeFactory().render());


function shapeFactory(): Shape {
  // if (Math.random() > 0.5) {
  //   return new Circle(4);
  // }

  return new Rectangle(4, 5);
}



class VideoCard implements IVideoCard {
  constructor(public model: string) {

  }
}
class Battery implements IBattery {
  constructor (public capacity: number) {

  }
 }
class LionBattery implements IBattery { }

interface IBattery { }

interface IVideoCard { }

// Computer
//         \
//          \
//           \
//            \
//              -> VideoCard

// Computer
//         \
//          \
//            -> IVideoCard
//             \    ^
//              \   |
//               -> VideoCard


class Computer {
  constructor(
    public videoCard: IVideoCard,
    public batter: IBattery
  ) {

  }
}

class DataClass {

  constructor(private http: HttpClient) {

  }
}
