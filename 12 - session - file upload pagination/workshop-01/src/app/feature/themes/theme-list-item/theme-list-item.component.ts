import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/auth.service';
import { UserService } from 'src/app/core/user.service';
import { ITheme } from '../../../core/interfaces';

@Component({
  selector: 'app-theme-list-item',
  templateUrl: './theme-list-item.component.html',
  styleUrls: ['./theme-list-item.component.css']
})
export class ThemeListItemComponent implements OnChanges {

  isLoggedIn$: Observable<boolean> = this.authService.isLoggedIn$;
  canSubscribe$: Observable<boolean>;

  @Input() theme: ITheme;

  constructor(private authService: AuthService) { }

  ngOnChanges(): void {
    // console.log('subs', this.theme.subscribers.includes('5fa64b162183ce1728ff371d'));
    // TODO stoimenovg: use currentUser$!
    // this.canSubscribe = !this.theme.subscribers.includes('5fa64b162183ce1728ff371d');
    this.canSubscribe$ = this.authService.currentUser$.pipe(map((currentUser) => {
      if (!currentUser || !this.theme) {
        return false;
      }

      return !this.theme.subscribers.includes(currentUser._id);
    }))
  }


}
