import { inject } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectIsLoggedIn } from '../auth.selectors';

export const authGuard: CanActivateFn = (): Observable<boolean> => {
  const store = inject(Store);
  const router = inject(Router);
  return store.select(selectIsLoggedIn).pipe(
    tap((isLoggedIn) => {
      if (!isLoggedIn) {
        router.navigateByUrl('/login');
      }
    })
  );
};
