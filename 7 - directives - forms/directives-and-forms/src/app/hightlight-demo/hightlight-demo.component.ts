import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HighlightDirective } from '../highlight.directive';

@Component({
  selector: 'app-hightlight-demo',
  templateUrl: './hightlight-demo.component.html',
  styleUrls: ['./hightlight-demo.component.css']
})
export class HightlightDemoComponent implements OnInit, AfterViewInit {

  backgroundColor: string = 'pink';

  @ViewChild('myParagraph') myParagraph!: HighlightDirective;

  constructor() { }

  ngOnInit(): void {
  }

  handleColor(newColor: string) {
    console.log('color changed', newColor);
  }

  ngAfterViewInit(): void {
    console.log(this.myParagraph);
  }
}
