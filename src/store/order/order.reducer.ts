import * as actionTypes from "../actionTypes";
import { OrderActionTypes, OrderState } from "./types";

const initialState: OrderState = {
  isPostingOrder: false,
};

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
    default:
      return state;
  }
};

export default reducer;
