import Dish from "../../shared/types/dish/Dish";
import * as actionTypes from "../actionTypes";

export interface OrderState {
  isPostingOrder: boolean;
}

export interface PostOrderStartAction {
  type: typeof actionTypes.POST_ORDER_START;
  dishes: Dish[];
}

export interface PostOrderFailureAction {
  type: typeof actionTypes.POST_ORDER_FAILURE;
}

export interface PostOrderSuccessAction {
  type: typeof actionTypes.POST_ORDER_SUCCSS;
}

export type OrderActionTypes =
  | PostOrderStartAction
  | PostOrderSuccessAction
  | PostOrderFailureAction;
