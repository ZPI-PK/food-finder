import * as actionTypes from "../actionTypes";
import { DishActionTypes, DishState } from "./types";

const initialState: DishState = {
  isLoading: false,
  dishes: [],
};

const reducer = (state = initialState, action: DishActionTypes): DishState => {
  switch (action.type) {
    case actionTypes.GET_DISHES_START:
      return { ...state, isLoading: true };
    case actionTypes.GET_DISHES_SUCCESS:
      return { ...state, dishes: action.dishes, isLoading: false };
    case actionTypes.GET_DISHES_FAILURE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default reducer;
