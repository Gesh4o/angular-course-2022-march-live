import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { createEffects } from "@ngrx/effects/src/effects_module";
import { of } from "rxjs";
import { catchError, filter, map, mergeMap } from "rxjs/operators";
import { UserService } from "src/app/core/user.service";
import { profileLoaded, profileLoadError, profilePageInitalized } from "./actions";

@Injectable()
export class ProfileEffects {
    constructor(private actions$: Actions, private userService: UserService) { }

    onProfilePageLoaded$ = createEffect(() =>
        this.actions$.pipe(
            filter(a => a.type === profilePageInitalized().type),
            mergeMap(() => this.userService.getProfile$()),
            map(currentProfile => profileLoaded({ profile: currentProfile })),
            catchError(() => of(profileLoadError()))
        )
    )
}