import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on,
} from '@ngrx/store';
import { AuthActions } from '../auth-types';
import { User } from '../model/user.model';

export const authFeatureKey = 'auth';

export interface AuthState {
  user: User;
}

export const initialState: AuthState = {
  user: undefined,
};

export const authReducer = createReducer(
  initialState,
  on(
    AuthActions.login,
    (state, action): AuthState => ({ ...state, user: action.user })
  )
);

// export const reducers: ActionReducerMap<AuthState> = {}; TODO: mirar como se usa esto
