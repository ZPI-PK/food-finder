import { StoreState } from "../../shared/types/store";
import * as actionTypes from "../actionTypes";
import { OrderActionTypes, OrderState } from "./types";

const initialState: OrderState = {
  isPostingOrder: false,
  orders: [],
};

export const getOrders = (state: StoreState) =>
  state.orderStore.orders.sort((a, b) => b.id - a.id);

const reducer = (
  state = initialState,
  action: OrderActionTypes
): OrderState => {
  switch (action.type) {
    case actionTypes.POST_ORDER_START:
      return { ...state, isPostingOrder: true };
    case actionTypes.POST_ORDER_FAILURE:
      return { ...state, isPostingOrder: false };
    case actionTypes.POST_ORDER_SUCCSS:
      return { ...state, isPostingOrder: false };
    case actionTypes.GET_ORDERS_SUCCESS:
      return { ...state, orders: action.orders };
    case actionTypes.ORDERS_UPDATED:
      return {
        ...state,
        orders: state.orders
          .filter((p) => p.id !== action.orders.id)
          .concat(action.orders),
      };
    default:
      return state;
  }
};

export default reducer;
