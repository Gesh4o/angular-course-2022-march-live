import { Component, Input, OnInit } from '@angular/core';
import { ITheme } from '../interfaces';

@Component({
  selector: 'app-theme-list-item',
  templateUrl: './theme-list-item.component.html',
  styleUrls: ['./theme-list-item.component.css']
})
export class ThemeListItemComponent implements OnInit {

  @Input() theme: ITheme;

  constructor() { }

  ngOnInit(): void {
  }

}
