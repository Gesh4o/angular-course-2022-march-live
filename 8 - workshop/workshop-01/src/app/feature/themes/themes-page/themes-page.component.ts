import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-themes-page',
  templateUrl: './themes-page.component.html',
  styleUrls: ['./themes-page.component.css']
})
export class ThemesPageComponent implements OnInit {

  isLoggedIn: boolean = this.userService.isLogged;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

}
