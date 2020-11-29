import * as actionTypes from "../actionTypes";

export interface RegisterState {
  error: string | null;
  registerLoading: boolean;
}

export interface RegisterStartAction {
  type: typeof actionTypes.REGISTER_START;
}

export interface RegisterSuccessAction {
  type: typeof actionTypes.REGISTER_SUCCESS;
}

export interface RegisterFailureAction {
  type: typeof actionTypes.REGISTER_FAILURE;
  error: string | null;
}

export type RegisterActionTypes =
  | RegisterStartAction
  | RegisterSuccessAction
  | RegisterFailureAction;
