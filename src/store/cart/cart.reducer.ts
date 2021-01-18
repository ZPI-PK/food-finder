import Dish from "../../shared/types/dish/Dish";
import { StoreState } from "../../shared/types/store";
import * as actionTypes from "../actionTypes";
import { CartActionTypes, CartState } from "./types";

const initialState: CartState = {
  dishes: [],
};

export const getCartTotal = (state: StoreState) =>
  state.cartStore.dishes.reduce((total, dg) => total + dg.count * dg.price, 0);

export const getDishes = (state: StoreState) =>
  state.cartStore.dishes.flatMap(({ count, ...dish }) => {
    let dishes: Dish[] = [];
    for (let i = 0; i < count; i++) {
      dishes.push({ ...dish });
    }
    return dishes;
  });

function addDish(state: CartState, dish: Dish) {
  const dishGroup = state.dishes.find((dg) => dg.id === dish.id);
  if (!dishGroup)
    return { ...state, dishes: state.dishes.concat({ ...dish, count: 1 }) };

  return {
    ...state,
    dishes: state.dishes.map((dg) =>
      dg.id === dish.id ? { ...dg, count: dg.count + 1 } : dg
    ),
  };
}
function removeDish(state: CartState, dish: Dish) {
  const dishGroup = state.dishes.find((dg) => dg.id === dish.id);
  if (!dishGroup) return state;

  if (dishGroup.count === 1)
    return {
      ...state,
      dishes: state.dishes.filter((dg) => dg.id !== dish.id),
    };
  return {
    ...state,
    dishes: state.dishes.map((dg) =>
      dg.id === dish.id ? { ...dg, count: dg.count - 1 } : dg
    ),
  };
}

const reducer = (state = initialState, action: CartActionTypes): CartState => {
  switch (action.type) {
    case actionTypes.ADD_DISH_TO_CART:
      return addDish(state, action.dish);
    case actionTypes.REMOVE_DISH_FROM_CART:
      return removeDish(state, action.dish);
    case actionTypes.CLEAR_CART:
      return { ...state, dishes: [] };
    default:
      return state;
  }
};

export default reducer;
