import * as actionTypes from "../actionTypes";
import {
  GetDishesStart,
  GetDishesFailure,
  GetDishesSuccess,
  AddDishStart,
  AddDishSuccess,
  AddDishFailure,
} from "./types";
import Dish from "../../shared/types/dish/Dish";
import AddDishRequest from "../../shared/types/dish/AddDishRequest";
import { StoreDispatch } from "../../shared/types/store";
import axios from "../../shared/config/axios";
import { AxiosResponse } from "axios";

export const addDishStart = (dish: AddDishRequest): AddDishStart => {
  return {
    type: actionTypes.ADD_DISH_START,
    dish,
  };
};

export const addDishSuccess = (dish: Dish): AddDishSuccess => {
  return {
    type: actionTypes.ADD_DISH_SUCCESS,
    dish,
  };
};

export const addDishFailure = (): AddDishFailure => {
  return {
    type: actionTypes.ADD_DISH_FAILURE,
  };
};

export const addDish = (request: AddDishRequest): any => (
  dispatch: StoreDispatch
): any => {
  dispatch(getDishesStart());

  return axios
    .post(`api/dish/add`, request)
    .then((res: AxiosResponse<Dish>) => {
      dispatch(addDishSuccess(res.data));
    })
    .catch(() => {
      dispatch(addDishFailure());
    });
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
