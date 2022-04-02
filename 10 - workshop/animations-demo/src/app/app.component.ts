import { animate, keyframes, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    // 'listAnimation' is bound 'items.length' (a counter).
    // Because of this I used the example from the docs to craft this example: https://angular.io/guide/transition-and-triggers#increment-and-decrement-in-transitions.
    trigger('listAnimation', [
      // When the number is increasing we will trigger the `:increment` transition. We:
      // 1. Set the opacity of the element to '0'.
      // 2. We increase opacity the newly added element and apply additional stilyng..
      transition(':increment', [
        query(':enter', [
          style({ opacity: 0 }),
          animate('3s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-75px)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
          ])),
        ], { optional: true }),
      ]),
      // When the number is decreasing we will trigger the `:decrement` transition. We:
      // 1. Set the opacity of the leaving element element to '1'.
      // 2. We lower the opacity to '0' and apply additional stilyng.
      transition(':decrement', [
        query(':leave', animate('3s ease-in', keyframes([
          style({ opacity: 1, transform: 'translateY(0px)', offset: 0 }),
          style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
          style({ opacity: 0, transform: 'translateY(-75px)', offset: 1 }),
        ])), { optional: true })
      ])

      // NOTE stoimenovg: we do not use 'stagger' here!
      // 'stagger' is used when we want to have "stacked" animation: e.g. several elements appearing one after another.
      // See the next animation for more clarity.
    ]),

    trigger('explainerAnim', [
      // When we enter the screen.
      transition(':enter', [
        // For every '.col' trigger an animation but make sure it is triggered 500ms
        // AFTER the previous '.col' element
        query('.col', [
          style({ opacity: 0, transform: 'translateX(-40px)' }),
          stagger('500ms', [
            animate('800ms 1.2s ease-out',
              style({ opacity: 1, transform: 'translateX(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class AppComponent {
  title = 'FinalProject';
  selectedFile!: File;
  items: string[] = []

  constructor() {
    this.items = ['first item', 'second item', 'third item']
  }

  onChangeEvent(event: any) {
    this.selectedFile = event.target.files[0]
  }

  pushItem() {
    this.items.push('This is new item')
  }

  removeItem() {
    this.items.pop();
  }

}
