import { isDevMode } from '@angular/core';
import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';

export const stateKeyRouter = 'router';

export interface AppState {}

export const reducers: ActionReducerMap<AppState> = {
  [stateKeyRouter]: routerReducer,
};

export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];
