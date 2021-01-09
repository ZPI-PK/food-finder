import axios from "../../shared/config/axios";
import Dish from "../../shared/types/dish/Dish";
import PostOrderRequest from "../../shared/types/order/PostOrderRequest";
import { StoreDispatch } from "../../shared/types/store";
import * as actionTypes from "../actionTypes";
import { clearCart } from "../cart/cart.action";
import { PostOrderStartAction, PostOrderSuccessAction } from "./types";

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
