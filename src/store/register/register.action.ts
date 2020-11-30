import axios from "../../shared/config/axios";
import * as actionTypes from "../actionTypes";
import {
  RegisterFailureAction,
  RegisterStartAction,
  RegisterSuccessAction,
} from "./types";
import StoreDispatch from "../../shared/types/store/StoreDispatch";
import RegisterRequest from "../../shared/types/register/RegisterRequest";
import * as H from "history";

export const registerStart = (): RegisterStartAction => {
  return {
    type: actionTypes.REGISTER_START,
  };
};

export const registerSuccess = (): RegisterSuccessAction => {
  return {
    type: actionTypes.REGISTER_SUCCESS,
  };
};

export const registerFailure = (
  error: string | null
): RegisterFailureAction => {
  return {
    type: actionTypes.REGISTER_FAILURE,
    error: error,
  };
};

export const register = (
  registerData: RegisterRequest,
  history: H.History<any>
): any => (dispatch: StoreDispatch): any => {
  dispatch(registerStart());

  return axios
    .post(`api/auth/signup`, registerData)
    .then(() => {
      dispatch(registerSuccess());
      history.push("/register-success");
    })
    .catch((err) => {
      if (err.response) {
        dispatch(registerFailure("Invalid email or password."));
      } else {
        dispatch(registerFailure(null));
      }
    });
};
