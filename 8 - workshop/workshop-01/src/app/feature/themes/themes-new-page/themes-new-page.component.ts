import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ThemeService } from 'src/app/core/theme.service';

@Component({
  selector: 'app-themes-new-page',
  templateUrl: './themes-new-page.component.html',
  styleUrls: ['./themes-new-page.component.css']
})
export class ThemesNewPageComponent implements OnInit {

  constructor(private router: Router, private themeService: ThemeService) { }

  ngOnInit(): void {
  }

  submitNewTheme(newThemeForm: NgForm): void {
    console.log(newThemeForm.value);
    this.themeService.addTheme$(newThemeForm.value).subscribe({
      next: (theme) => {
        console.log(theme);
        this.router.navigate(['/themes']);
      },
      error: (error) => {
        console.error(error);
      }
    })

  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

}
