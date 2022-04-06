import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit, OnDestroy {

  isLoggedIn: boolean;

  private subscription: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    //    console.log('ngOnInit#preSubscription');
    this.subscription = this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      // console.log('isLoggedIn', isLoggedIn);
      this.isLoggedIn = isLoggedIn;
    });

    // console.log('ngOnInit#postSubscription');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
