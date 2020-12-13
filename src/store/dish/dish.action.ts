import * as actionTypes from "../actionTypes";
import {
  AddDish,
  GetDishesStart,
  GetDishesFailure,
  GetDishesSuccess,
} from "./types";
import Dish from "../../shared/types/dish/Dish";
import AddDishRequest from "../../shared/types/dish/AddDishRequest";
import { StoreDispatch } from "../../shared/types/store";
import axios from "../../shared/config/axios";
import { AxiosResponse } from "axios";

export const addDish = (dish: AddDishRequest): AddDish => {
  return {
    type: actionTypes.ADD_DISH,
    dish,
  };
};

export const getDishesStart = (): GetDishesStart => {
  return {
    type: actionTypes.GET_DISHES_START,
  };
};

export const getDishesSuccess = (dishes: Dish[]): GetDishesSuccess => {
  return {
    type: actionTypes.GET_DISHES_SUCCESS,
    dishes,
  };
};

export const getDishesFailure = (): GetDishesFailure => {
  return {
    type: actionTypes.GET_DISHES_FAILURE,
  };
};

export const getDishes = (): any => (dispatch: StoreDispatch): any => {
  dispatch(getDishesStart());

  return axios
    .get(`api/dish/all`)
    .then((res: AxiosResponse<Dish[]>) => {
      dispatch(getDishesSuccess(res.data));
    })
    .catch(() => {
      dispatch(getDishesFailure());
    });
};
