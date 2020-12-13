import Dish from "../../shared/types/dish/Dish";
import { DishGroup } from "../../shared/types/dish/DishGroup";
import * as actionTypes from "../actionTypes";

export interface CartState {
  dishes: DishGroup[];
}

export interface AddDishToCartAction {
  type: typeof actionTypes.ADD_DISH_TO_CART;
  dish: Dish;
}

export interface RemoveDishFromCartAction {
  type: typeof actionTypes.REMOVE_DISH_FROM_CART;
  dish: Dish;
}

export type CartActionTypes = AddDishToCartAction | RemoveDishFromCartAction;
