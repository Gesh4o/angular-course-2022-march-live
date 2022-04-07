import { createAction, props } from "@ngrx/store"
import { IUser } from "src/app/core/interfaces"
import { IUpdateUserDto } from "src/app/core/user.service";

const profileDomain = '[ProfileComponent]'
export const profileLoaded =
    createAction(`${profileDomain} Profile Loaded`, props<{ profile: IUser }>());
export const enterEditMode = createAction(`${profileDomain} Enter Edit Mode`);
export const exitEditMode = createAction(`${profileDomain} Exit Edit Mode`);
export const profilePageInitalized = createAction(`${profileDomain} Profile Initailize`)
export const profileLoadError = createAction(`${profileDomain} Error`);

// The 3 actions below we are added offline.
export const updateProfileStarted = createAction(`${profileDomain} Update Profile Triggered`, props<{ user: IUpdateUserDto }>());
export const updateProfileError = createAction(`${profileDomain} Update Profile Error`, props<{ errorMessage: string }>());
export const updateProfileCompleted = createAction(`${profileDomain} Update Profile Completed`, props<{ updatedUser: IUser }>());
// End of offline edit.

const loginDomain = '[LoginComponent]';
export const startLoginProcess = createAction(`${loginDomain} Start Login`);
export const endLoginProcess = createAction(`${loginDomain} End Login`);
export const loginProcessError = createAction(`${loginDomain} Login Error`, props<{ errorMessage: string }>());
export const initializeLoginState = createAction(`${loginDomain} Login Initailize`);
