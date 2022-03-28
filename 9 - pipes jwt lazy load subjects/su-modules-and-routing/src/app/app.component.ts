import { Component, Injectable } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'su-modules-and-routing';
}


export abstract class Engine {
}

@Injectable()
export class PetrolEngine extends Engine {
}

@Injectable()
export class DieselEngine extends Engine {
}
