import { createAction, props } from "@ngrx/store";
import { IUser } from "../core/interfaces";

const myCounterDomain = '[MyCounterComponent]'
export const increment = createAction(`${myCounterDomain} Increment`);
export const decrement = createAction(`${myCounterDomain} Decrement`);
export const reset = createAction(`${myCounterDomain} Reset`);


const currentUserDomain = '[CurrentUser]'
export const login = createAction(`${currentUserDomain} Login`, props<{ user: IUser }>());
export const logout = createAction(`${currentUserDomain} Logout`);