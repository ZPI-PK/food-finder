import * as actionTypes from "../actionTypes";
import {
  RegisterActionTypes,
  RegisterFailureAction,
  RegisterState,
} from "./types";

const initialState: RegisterState = {
  error: null,
  registerLoading: false,
};

const registerStart = (state: RegisterState): RegisterState => {
  return {
    ...state,
    error: null,
    registerLoading: true,
  };
};

const registerSuccess = (state: RegisterState): RegisterState => {
  return {
    ...state,
    error: null,
    registerLoading: false,
  };
};

const registerFailure = (
  state: RegisterState,
  action: RegisterFailureAction
): RegisterState => {
  return {
    ...state,
    error: action.error,
    registerLoading: false,
  };
};

const reducer = (
  state = initialState,
  action: RegisterActionTypes
): RegisterState => {
  switch (action.type) {
    case actionTypes.REGISTER_START:
      return registerStart(state);
    case actionTypes.REGISTER_SUCCESS:
      return registerSuccess(state);
    case actionTypes.REGISTER_FAILURE:
      return registerFailure(state, action);

    default:
      return state;
  }
};

export default reducer;
