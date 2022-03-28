import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

const lightThemeImage = 'https://angular.io/assets/images/logos/angular/angular_solidBlack.svg';
const darkThemeImage = 'https://angular.io/assets/images/logos/angular/angular_whiteTransparent.svg';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  imgSource = lightThemeImage;

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('About Page');
  }

}
