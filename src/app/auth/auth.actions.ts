import { createAction, props } from '@ngrx/store';
import { User } from './model/user.model';

export const login = createAction(
  '[Login Page] user login',
  props<{ user: User }>()
);

export const loginReset = createAction(
  '[App Component] user login',
  props<{ user: User }>()
);

export const logout = createAction('[Top Menu] user logout');
