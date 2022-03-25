import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost, ITheme } from 'src/app/core/interfaces';
import { ThemeService } from 'src/app/core/theme.service';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-themes-detail-page',
  templateUrl: './themes-detail-page.component.html',
  styleUrls: ['./themes-detail-page.component.css']
})
export class ThemesDetailPageComponent implements OnInit {
  theme: ITheme<IPost>;

  canSubscribe: boolean = false;
  isLoggedIn: boolean = this.userService.isLogged;

  constructor(private activatedRoute: ActivatedRoute, 
    private themeService: ThemeService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const themeId = params['themeId'];
      this.themeService.loadThemeById(themeId).subscribe(theme => {
        this.theme = theme;
        this.canSubscribe = !this.theme.subscribers.includes('5fa64b162183ce1728ff371d');
      });
    })
  }


  canLike(comment: IPost){
    return !comment.likes.includes('5fa64b162183ce1728ff371d');
  }

}
