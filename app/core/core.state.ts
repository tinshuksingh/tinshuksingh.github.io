import {
  ActionReducerMap,
  MetaReducer,
  createFeatureSelector
} from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '@env/environment';

import { initStateFromLocalStorage } from '@app/core/meta-reducers/init-state-from-local-storage.reducer';
import { debug } from '@app/core/meta-reducers/debug.reducer';
import { AuthState } from '@app/core/auth/auth.models';
import { authReducer } from '@app/core/auth/auth.reducer';

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer
};

export const metaReducers: MetaReducer<AppState>[] = [
  initStateFromLocalStorage
];
if (!environment.production) {
  metaReducers.unshift(storeFreeze);
  if (!environment.test) {
    metaReducers.unshift(debug);
  }
}

export const selectAuthState = createFeatureSelector<AppState, AuthState>(
  'auth'
);

export interface AppState {
  auth: AuthState;
}
