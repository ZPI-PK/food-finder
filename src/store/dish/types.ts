import AddDishRequest from "../../shared/types/dish/AddDishRequest";
import Dish from "../../shared/types/dish/Dish";
import * as actionTypes from "../actionTypes";

export interface DishState {
  isLoading: boolean;
  dishes: Dish[];
}

export interface AddDishStart {
  type: typeof actionTypes.ADD_DISH_START;
  dish: AddDishRequest;
}
export interface AddDishSuccess {
  type: typeof actionTypes.ADD_DISH_SUCCESS;
  dish: Dish;
}
export interface AddDishFailure {
  type: typeof actionTypes.ADD_DISH_FAILURE;
}

export interface GetDishesStart {
  type: typeof actionTypes.GET_DISHES_START;
}
export interface GetDishesSuccess {
  type: typeof actionTypes.GET_DISHES_SUCCESS;
  dishes: Dish[];
}
export interface GetDishesFailure {
  type: typeof actionTypes.GET_DISHES_FAILURE;
}

export type DishActionTypes =
  | AddDishStart
  | AddDishSuccess
  | AddDishFailure
  | GetDishesStart
  | GetDishesSuccess
  | GetDishesFailure;
