import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { MessageBusService, MessageType } from 'src/app/core/message-bus.service';
import { IAuthModuleState } from '../+store';
import { initializeLoginState, loginProcessError, startLoginProcess } from '../+store/actions';
import { loginErrorMessageSelector, loginIsLoginPendingSelector } from '../+store/selectors';
import { emailValidator } from '../util';

const myRequired = (control: AbstractControl) => {
  // console.log('validator called');
  return Validators.required(control);
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  errorMessage$: Observable<string> = this.store.select(loginErrorMessageSelector);
  isLoginPending$: Observable<boolean> = this.store.select(loginIsLoginPendingSelector);

  loginFormGroup: FormGroup = this.formBuilder.group({
    email: new FormControl('', { validators: [myRequired, emailValidator], updateOn: 'submit' }),
    password: new FormControl(null, [Validators.required, Validators.minLength(5)])
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private messageBus: MessageBusService,
    private store: Store<IAuthModuleState>,
    private router: Router) { }

  ngOnInit(): void {
    // this.store.dispatch(initializeLoginState());
    // this.loginFormGroup.get('email').valueChanges.subscribe(value => {
    //   console.log('email changed', value);
    // })
  }

  ngOnDestroy(): void {
    this.store.dispatch(initializeLoginState());
  }

  loginHandler(): void {
    // TODO stoimenovg: validate user's data.
    // this.userService.login();
    // this.router.navigate(['/home']);

    // console.log('fromClickHandler', this.loginFormGroup.valid);
  }

  handleLogin(): void {
    // console.log('fromNgSubmit', this.loginFormGroup.valid);

    this.store.dispatch(startLoginProcess());
    this.authService.login$(this.loginFormGroup.value).subscribe({
      next: () => {
        if (this.activatedRoute.snapshot.queryParams['redirect-to']) {
          this.router.navigateByUrl(this.activatedRoute.snapshot.queryParams['redirect-to'])
        } else {
          this.router.navigate(['/home']);
        }

        this.messageBus.notifyForMessage({ text: 'User successfully logged in!', type: MessageType.Success })
      },
      complete: () => {
        console.log('login stream completed')
      },
      error: (err) => {
        this.store.dispatch(loginProcessError({ errorMessage: err.error.message }));
      }
    });
  }
}
