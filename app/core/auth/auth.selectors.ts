import { createSelector } from '@ngrx/store';

import { selectAuthState } from '@app/core/core.state';
import { AuthState } from '@app/core/auth/auth.models';

export const selectAuth = createSelector(
  selectAuthState,
  (state: AuthState) => state
);
