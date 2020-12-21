import { StoreState } from "../../shared/types/store";
import * as actionTypes from "../actionTypes";
import {
  AuthActionTypes,
  AuthFailureAction,
  AuthLogoutAction,
  AuthStartAction,
  AuthState,
  AuthSuccessAction,
} from "./types";

const initialState: AuthState = {
  accessToken: null,
  error: null,
  authLoading: false,
  isAdmin: false,
};

export const getIsAdmin = (state: StoreState) => state.authStore.isAdmin;

const authStart = (state: AuthState, action: AuthStartAction): AuthState => {
  return {
    ...state,
    error: null,
    authLoading: true,
  };
};

const authSuccess = (
  state: AuthState,
  action: AuthSuccessAction
): AuthState => {
  return {
    ...state,
    accessToken: action.accessToken,
    error: null,
    authLoading: false,
  };
};

const authFailure = (
  state: AuthState,
  action: AuthFailureAction
): AuthState => {
  return {
    ...state,
    error: action.error,
    authLoading: false,
  };
};

const authLogout = (state: AuthState, action: AuthLogoutAction): AuthState => {
  return { ...state, accessToken: null };
};

const reducer = (state = initialState, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAILURE:
      return authFailure(state, action);

    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    default:
      return state;
  }
};

export default reducer;
