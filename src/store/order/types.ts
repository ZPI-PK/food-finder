import Dish from "../../shared/types/dish/Dish";
import { Order } from "../../shared/types/order/Order";
import * as actionTypes from "../actionTypes";

export interface OrderState {
  isPostingOrder: boolean;
  orders: Order[];
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

export interface GetOrdersStart {
  type: typeof actionTypes.GET_ORDERS_START;
}
export interface GetOrdersSuccess {
  type: typeof actionTypes.GET_ORDERS_SUCCESS;
  orders: Order[];
}
export interface GetOrdersFailure {
  type: typeof actionTypes.GET_ORDERS_FAILURE;
}

export interface OrdersUpdatedAction {
  type: typeof actionTypes.ORDERS_UPDATED;
  orders: Order;
}

export type OrderActionTypes =
  | PostOrderStartAction
  | PostOrderSuccessAction
  | PostOrderFailureAction
  | GetOrdersFailure
  | GetOrdersStart
  | GetOrdersSuccess
  | OrdersUpdatedAction;
