import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-demo',
  templateUrl: './directives-demo.component.html',
  styleUrls: ['./directives-demo.component.css']
})
export class DirectivesDemoComponent implements OnInit {
  styling = { 'background-color': 'yellow', 'color': 'blue' }

  shouldFontBeBig: boolean = false;

  shouldShowText: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
