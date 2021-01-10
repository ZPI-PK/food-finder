import { StoreState } from "../../shared/types/store";
import * as actionTypes from "../actionTypes";
import { OrderActionTypes, OrderState } from "./types";

const initialState: OrderState = {
  isPostingOrder: false,
  orders: [
    {
      id: 1,
      city: "Kraków",
      postalCode: "30-197",
      street: "Balicka",
      buildingNumber: "31",
      dishes: [
        { id: 1, name: "rosol", description: "super rosol", price: 13 },
        { id: 1, name: "rosol", description: "super rosol", price: 13 },
        { id: 2, name: "pizza", description: "super pizza", price: 13 },
        { id: 2, name: "pizza", description: "super pizza", price: 13 },
      ],
      userId: 2,
      price: 52,
      status: "CREATED",
    },
    {
      id: 2,
      city: "Kraków",
      postalCode: "30-197",
      street: "Balicka",
      buildingNumber: "31",
      dishes: [
        { id: 1, name: "rosol", description: "super rosol", price: 13 },
        { id: 1, name: "rosol", description: "super rosol", price: 13 },
        { id: 1, name: "rosol", description: "super rosol", price: 13 },
        { id: 1, name: "rosol", description: "super rosol", price: 13 },
      ],
      userId: 2,
      price: 52,
      status: "DONE",
    },
    {
      id: 3,
      city: "Kraków",
      postalCode: "30-197",
      street: "Balicka",
      buildingNumber: "31",
      dishes: [
        { id: 1, name: "rosol", description: "super rosol", price: 13 },
        { id: 1, name: "rosol", description: "super rosol", price: 13 },
        { id: 1, name: "rosol", description: "super rosol", price: 13 },
        { id: 1, name: "rosol", description: "super rosol", price: 13 },
      ],
      userId: 2,
      price: 52,
      status: "DURING",
    },
  ],
};

export const getOrders = (state: StoreState) =>
  state.orderStore.orders.sort((a, b) => b.id - a.id);

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
    case actionTypes.GET_ORDERS_SUCCESS:
      return { ...state, orders: action.orders };
    case actionTypes.ORDERS_UPDATED:
      return {
        ...state,
        orders: state.orders
          .filter((p) => p.id !== action.orders.id)
          .concat(action.orders),
      };
    default:
      return state;
  }
};

export default reducer;
