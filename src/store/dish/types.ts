import AddDishRequest from "../../shared/types/dish/AddDishRequest";
import Dish from "../../shared/types/dish/Dish";
import * as actionTypes from "../actionTypes";

export interface DishState {
  isLoading: boolean;
  dishes: Dish[];
}

export interface AddDish {
  type: typeof actionTypes.ADD_DISH;
  dish: AddDishRequest;
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
  | AddDish
  | GetDishesStart
  | GetDishesSuccess
  | GetDishesFailure;
