import { animate, keyframes, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('*=>*', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query('enter', stagger('1300ms', [
          animate('3s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-75px)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
          ]))
        ]), {optional:true}),
        query('leave', stagger('1300ms', [
          animate('3s ease-in', keyframes([
            style({ opacity: 1, transform: 'translateY(0px)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
            style({ opacity: 0, transform: 'translateY(-75px)', offset: 1 }),
          ]))
        ]), {optional:true})
      ])
    ]),
    trigger('explainerAnim', [
      transition('*=>*', [
        query(':enter', style({opacity: 0, transform: 'translateX(-40px)'}), {optional:true}),
        query('.col', stagger('500ms', [
          animate('800ms 1.2s ease-out', style({opacity: 1, transform: 'translateX(0)'}))
        ]), {optional:true})
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
