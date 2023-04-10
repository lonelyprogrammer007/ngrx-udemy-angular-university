import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthActions } from './action.types';
import { tap } from 'rxjs/operators';

export const USER_LOCAL_STORAGE_KEY = 'user';

@Injectable()
export class AuthEffects {
  login$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.login),
        tap((action) =>
          localStorage.setItem(
            USER_LOCAL_STORAGE_KEY,
            JSON.stringify(action.user)
          )
        )
      );
    },
    { dispatch: false }
  );

  logout$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.logout),
        tap(() => {
          localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
          this.router.navigateByUrl('/login');
        })
      );
    },
    { dispatch: false }
  );

  constructor(private actions$: Actions, private router: Router) {}
}
