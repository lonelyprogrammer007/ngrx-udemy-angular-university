import { createFeatureSelector, createSelector } from '@ngrx/store';
import { authFeatureKey, AuthState } from './reducers';

export const selectAuthState = createFeatureSelector<AuthState>(authFeatureKey);

export const selectIsLoggedIn = createSelector(
  selectAuthState,
  (auth) => !!auth.user
);

export const selectIsLoggedOut = createSelector(
  selectIsLoggedIn,
  (isLoggedIn) => !isLoggedIn
);
