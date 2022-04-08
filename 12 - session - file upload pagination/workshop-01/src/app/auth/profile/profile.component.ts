import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/core/interfaces';
import { UserService } from 'src/app/core/user.service';
import { IAuthModuleState } from '../+store';
import { enterEditMode, exitEditMode, profilePageInitalized, updateProfileStarted } from '../+store/actions';

const bgCountryTelPrefix = '00359';
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

  newProfilePicture?: File;

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
        // The below 2 properties were updated offline.
        'select-tel': (currentUser.tel || '').startsWith(bgCountryTelPrefix) ? bgCountryTelPrefix : '',
        tel: (currentUser.tel || '').startsWith(bgCountryTelPrefix) ? currentUser.tel.replace(bgCountryTelPrefix, '') : currentUser.tel,
        // End of offline edit.
      })
    });
  }

  updateProfile(): void {
    // Offline updated code.
    let countryPrefix = this.editProfileForm.value['select-tel'];
    if (!this.editProfileForm.value.tel) {
      countryPrefix = '';
    }

    this.store.dispatch(updateProfileStarted({
      user: {
        username: this.editProfileForm.value.username,
        email: this.editProfileForm.value.email,
        tel: countryPrefix + this.editProfileForm.value.tel,
        profilePicture: this.newProfilePicture,
      }
    }));
    // End of offline update.

    // Previous code.
    // // TODO stoimenovg: continue.
    // console.log(this.editProfileForm.value);

    // this.exitEditMode();
  }

  exitEditMode(): void {
    this.store.dispatch(exitEditMode());
  }

  handleProfilePictureChange(event: InputEvent) {
    const input: HTMLInputElement = event.target as HTMLInputElement;
    this.newProfilePicture = input.files[0];
  }
}
