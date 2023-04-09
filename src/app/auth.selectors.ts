import { createFeatureSelector, createSelector } from '@ngrx/store';
import { authFeatureKey, AuthState } from './auth/reducers';

export const selectAuthState = createFeatureSelector<AuthState>(authFeatureKey);

export const selectIsLoggedIn = createSelector(
  selectAuthState,
  (auth) => !!auth.user
);

export const selectIsLoggedOut = createSelector(
  selectIsLoggedIn,
  (isLoggedIn) => !isLoggedIn
);
