import * as actionTypes from "../actionTypes";
import { CartActionTypes, CartState } from "./types";

const initialState: CartState = {
  dishes: [],
};

const reducer = (state = initialState, action: CartActionTypes): CartState => {
  switch (action.type) {
    case actionTypes.ADD_DISH_TO_CART:
      return { ...state, dishes: state.dishes.concat(action.dish) };
    case actionTypes.REMOVE_DISH_FROM_CART:
      return {
        ...state,
        dishes: state.dishes.filter((dish) => dish.id !== action.dish.id),
      };
    default:
      return state;
  }
};

export default reducer;
