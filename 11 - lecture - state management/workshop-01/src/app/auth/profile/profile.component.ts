import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IUser } from 'src/app/core/interfaces';
import { UserService } from 'src/app/core/user.service';
import { IAuthModuleState } from '../+store';
import { enterEditMode, exitEditMode, profileLoaded, profilePageInitalized } from '../+store/actions';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @ViewChild('editProfileForm') editProfileForm: NgForm;

  // currentUser: IUser;

  currentUser$: Observable<IUser> = this.store.select(state => state.auth.profile.currentProfile)
    // .pipe(tap(profile => this.currentUser = profile))
    ;

  isInEditMode$: Observable<boolean> = this.store.select(state => state.auth.profile.isInEditMode);

  hasErrorHappened: Observable<boolean> = this.store.select(state => state.auth.profile.errorHappened);

  constructor(
    private userService: UserService,
    private router: Router,
    private store: Store<IAuthModuleState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(profilePageInitalized());

    this.hasErrorHappened.subscribe((hasError) => {
      if (hasError) {
        this.router.navigate(['/user/login'])
      }
    })
    // this.userService.getProfile$().subscribe({
    //   next: (user) => {
    //     this.store.dispatch(profileLoaded({ profile: user }));
    //   },
    //   error: () => {
    //   this.router.navigate(['/user/login'])
    //   }
    // })
  }

  enterEditMode(currentUser: IUser): void {
    this.store.dispatch(enterEditMode());

    setTimeout(() => {
      this.editProfileForm.form.patchValue({
        email: currentUser.email,
        username: currentUser.username,
        'select-tel': currentUser.tel && currentUser.tel.length > 4
          ? currentUser.tel.substring(0, 4) : '',
        tel: currentUser.tel && currentUser.tel.length > 4
          ? currentUser.tel.substring(4) :
          currentUser.tel
      })
    });
  }

  updateProfile(): void {
    // TODO stoimenovg: continue.
    console.log(this.editProfileForm.value);

    this.exitEditMode();
  }

  exitEditMode(): void {
    this.store.dispatch(exitEditMode());
  }
}
