import * as actionTypes from "../actionTypes";
import { RemoveDishFromCartAction, AddDishToCartAction } from "./types";
import Dish from "../../shared/types/dish/Dish";

export const addDishToCart = (dish: Dish): AddDishToCartAction => {
  return {
    type: actionTypes.ADD_DISH_TO_CART,
    dish,
  };
};

export const removeDishFromCart = (dish: Dish): RemoveDishFromCartAction => {
  return {
    type: actionTypes.REMOVE_DISH_FROM_CART,
    dish,
  };
};
