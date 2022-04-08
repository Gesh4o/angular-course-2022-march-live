import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { mergeMap, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth.service';
import { IPost, ITheme, IUser } from 'src/app/core/interfaces';
import { ThemeService } from 'src/app/core/theme.service';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-themes-detail-page',
  templateUrl: './themes-detail-page.component.html',
  styleUrls: ['./themes-detail-page.component.css']
})
export class ThemesDetailPageComponent implements OnInit {
  theme: ITheme<IPost, string>;

  refreshThemeRequest$ = new BehaviorSubject(undefined);

  canSubscribe: boolean = false;
  currentUser?: IUser;
  isUserOwner: boolean = false;
  isLoggedIn$: Observable<boolean> = this.authService.isLoggedIn$;


  constructor(private activatedRoute: ActivatedRoute,
    private themeService: ThemeService,
    private authService: AuthService) { }

  ngOnInit(): void {
    combineLatest([
      this.activatedRoute.params
        .pipe(
          mergeMap(params => {
            const themeId = params['themeId'];
            return this.refreshThemeRequest$.pipe(mergeMap(() => this.themeService.loadThemeById(themeId)))
          })
        ),
      this.authService.currentUser$
    ])
      .subscribe(([theme, user]) => {
        this.currentUser = user
        this.theme = theme;
        this.canSubscribe = user && !this.theme.subscribers.includes(user?._id);
        this.isUserOwner = user && this.theme.userId === user._id;
      });
  }

  canLike(comment: IPost) {
    return this.currentUser && !comment.likes.includes(this.currentUser._id);
  }

  subscribe(): void {
    this.themeService.subscribeToTheme(this.theme._id)
      .subscribe(() => this.refreshThemeRequest$.next(undefined));
  }

  unsubscribe(): void {
    this.themeService.unsubscribe(this.theme._id)
      .subscribe(() => this.refreshThemeRequest$.next(undefined));
  }

  like(comment: IPost): void {
    this.themeService.likePost(comment._id).subscribe(() => this.refreshThemeRequest$.next(undefined));
  }

  unlike(comment: IPost): void {
    this.themeService.dislikePost(comment._id).subscribe(() => this.refreshThemeRequest$.next(undefined));
  }
}
