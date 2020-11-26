import * as actionTypes from "../actionTypes";

export interface AuthState {
  accessToken: string | null;
  error: string | null;
  authLoading: boolean;
}

export interface AuthStartAction {
  type: typeof actionTypes.AUTH_START;
}

export interface AuthSuccessAction {
  type: typeof actionTypes.AUTH_SUCCESS;
  accessToken: string;
}

export interface AuthFailureAction {
  type: typeof actionTypes.AUTH_FAILURE;
  error: string | null;
}

export interface AuthLogoutAction {
  type: typeof actionTypes.AUTH_LOGOUT;
}

export type AuthActionTypes =
  | AuthStartAction
  | AuthSuccessAction
  | AuthFailureAction
  | AuthLogoutAction;
