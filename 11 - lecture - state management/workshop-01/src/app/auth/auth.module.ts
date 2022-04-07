import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmailValidatorDirective } from './email-validator.directive';
import { StoreModule } from '@ngrx/store';
import { IAuthState, profileReducer, loginReducer } from './+store';
import { EffectsModule } from '@ngrx/effects';
import { ProfileEffects } from './+store/profile.effects';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    EmailValidatorDirective,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature<IAuthState>('auth', {
      profile: profileReducer,
      login: loginReducer,
    }),
    EffectsModule.forFeature([ProfileEffects])
  ]
})
export class AuthModule { }
