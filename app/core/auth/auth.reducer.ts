import { AuthState } from '@app/core/auth/auth.models';
import { AuthActions, AuthActionTypes } from '@app/core/auth/auth.actions';

export const initialState: AuthState = {
  isAuthenticated: false
};

export function authReducer(
  state: AuthState = initialState,
  action: AuthActions
): AuthState {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      return { ...state, isAuthenticated: true };

    case AuthActionTypes.LOGOUT:
      return { ...state, isAuthenticated: false };

    default:
      return state;
  }
}
