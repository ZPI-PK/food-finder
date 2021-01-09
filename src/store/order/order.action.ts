import { AxiosResponse } from "axios";
import axios from "../../shared/config/axios";
import Dish from "../../shared/types/dish/Dish";
import { Order } from "../../shared/types/order/Order";
import PostOrderRequest from "../../shared/types/order/PostOrderRequest";
import { StoreDispatch } from "../../shared/types/store";
import * as actionTypes from "../actionTypes";
import { clearCart } from "../cart/cart.action";
import {
  GetOrdersFailure,
  GetOrdersStart,
  GetOrdersSuccess,
  PostOrderStartAction,
  PostOrderSuccessAction,
} from "./types";

const postOrderStart = (dishes: Dish[]): PostOrderStartAction => {
  return {
    type: actionTypes.POST_ORDER_START,
    dishes,
  };
};

const postOrderSuccess = (): PostOrderSuccessAction => ({
  type: actionTypes.POST_ORDER_SUCCSS,
});

const postOrderFailure = (): PostOrderSuccessAction => ({
  type: actionTypes.POST_ORDER_SUCCSS,
});

export const postOrder = (request: PostOrderRequest): any => (
  dispatch: StoreDispatch
): any => {
  dispatch(postOrderStart(request.dishes));

  return axios
    .post(`api/order/create`, request)
    .then(() => {
      dispatch(postOrderSuccess());
      dispatch(clearCart());
    })
    .catch(() => {
      dispatch(postOrderFailure());
    });
};

export const getOrdersStart = (): GetOrdersStart => {
  return {
    type: actionTypes.GET_ORDERS_START,
  };
};

export const getOrdersSuccess = (orders: Order[]): GetOrdersSuccess => {
  return {
    type: actionTypes.GET_ORDERS_SUCCESS,
    orders,
  };
};

export const getOrdersFailure = (): GetOrdersFailure => {
  return {
    type: actionTypes.GET_ORDERS_FAILURE,
  };
};

export const getOrders = (): any => (dispatch: StoreDispatch): any => {
  dispatch(getOrdersStart());

  return axios
    .get(`api/order/all`)
    .then((res: AxiosResponse<Order[]>) => {
      dispatch(getOrdersSuccess(res.data));
    })
    .catch(() => {
      dispatch(getOrdersFailure());
    });
};
