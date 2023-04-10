import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on,
} from '@ngrx/store';
import { AuthActions } from '../action.types';
import { User } from '../model/user.model';

export const authFeatureKey = 'auth';

export interface AuthState {
  user: User;
}

export const initialState: AuthState = {
  user: undefined,
};

const loginReducerAction = (state, action): AuthState => ({
  ...state,
  user: action.user,
});

export const authReducer = createReducer(
  initialState,
  on(AuthActions.login, loginReducerAction),
  on(AuthActions.loginReset, loginReducerAction),
  on(AuthActions.logout, (state): AuthState => ({ ...state, user: undefined }))
);

// export const reducers: ActionReducerMap<AuthState> = {}; TODO: mirar como se usa esto
