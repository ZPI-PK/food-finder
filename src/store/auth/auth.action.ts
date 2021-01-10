import axios, { setBearerToken } from "../../shared/config/axios";
import * as actionTypes from "../actionTypes";
import Cookies from "js-cookie";
import {
  AuthFailureAction,
  AuthLogoutAction,
  AuthStartAction,
  AuthSuccessAction,
} from "./types";
import StoreDispatch from "../../shared/types/store/StoreDispatch";
import { AxiosResponse } from "axios";
import LoginRequest from "../../shared/types/auth/LoginRequest";
import jwt_decode from "jwt-decode";

export const authStart = (): AuthStartAction => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (
  accessToken: string,
  isAdmin: boolean
): AuthSuccessAction => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    accessToken: accessToken,
    isAdmin,
  };
};

export const authFailure = (error: string | null): AuthFailureAction => {
  return {
    type: actionTypes.AUTH_FAILURE,
    error: error,
  };
};

export const auth = (authData: LoginRequest): any => (
  dispatch: StoreDispatch
): any => {
  dispatch(authStart());

  return axios
    .post(`api/auth/signin`, authData)
    .then((res: AxiosResponse<any>) => {
      const accessToken: string = res.data.accessToken;
      const decodeToken: any = jwt_decode(accessToken);
      setBearerToken(accessToken);

      const expirationDate = new Date(decodeToken.exp * 1000);

      Cookies.set("accessToken", accessToken);
      Cookies.set("expirationDate", expirationDate);

      const isAdmin = authData.usernameOrEmail === "admin";
      dispatch(authSuccess(accessToken, isAdmin));
      dispatch(
        checkAuthTimeout(expirationDate.getTime() - new Date().getTime())
      );
    })
    .catch((err) => {
      if (err.response) {
        dispatch(authFailure("Invalid email or password."));
      } else {
        dispatch(authFailure(null));
      }
    });
};

export const authCheck = (): any => (dispatch: StoreDispatch): any => {
  const accessToken = Cookies.get("accessToken");
  const expirationDate = Cookies.get("expirationDate");

  if (accessToken && expirationDate && new Date(expirationDate) > new Date()) {
    setBearerToken(accessToken);
    dispatch(authSuccess(accessToken, false));
    dispatch(
      checkAuthTimeout(
        new Date(expirationDate).getTime() - new Date().getTime()
      )
    );
  } else {
    dispatch(authLogout());
  }
};

export const checkAuthTimeout = (expirationTime: number): any => (
  dispatch: StoreDispatch
) => {
  setTimeout(() => {
    dispatch(authLogout());
  }, expirationTime);
};

export const authLogout = (): AuthLogoutAction => {
  Cookies.remove("accessToken");
  Cookies.remove("expirationDate");

  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};
