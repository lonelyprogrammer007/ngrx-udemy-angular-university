import { isDevMode } from '@angular/core';
import { routerReducer } from '@ngrx/router-store';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';

export const stateKeyRouter = 'router';

export interface AppState {}

export const reducers: ActionReducerMap<AppState> = {
  [stateKeyRouter]: routerReducer,
};

export function logger(
  reducer: ActionReducer<unknown>
): ActionReducer<unknown> {
  return (state, action) => {
    console.log('state before', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<AppState>[] = isDevMode()
  ? [logger]
  : [];
