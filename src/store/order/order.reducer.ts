import * as actionTypes from "../actionTypes";
import { OrderActionTypes, OrderState } from "./types";

const initialState: OrderState = {
  isPostingOrder: false,
  orders: [
    {
      id: 1,
      city: "asd",
      postalCode: "asd",
      street: "asd",
      buildingNumber: "asd",
      dishes: [
        { id: 1, name: "rosol", description: "super rosol", price: 13 },
        { id: 1, name: "rosol", description: "super rosol", price: 13 },
        { id: 1, name: "rosol", description: "super rosol", price: 13 },
        { id: 1, name: "rosol", description: "super rosol", price: 13 },
      ],
      userId: 2,
      price: 52,
    },
    {
      id: 2,
      city: "asd",
      postalCode: "asd",
      street: "asd",
      buildingNumber: "asd",
      dishes: [
        { id: 1, name: "rosol", description: "super rosol", price: 13 },
        { id: 1, name: "rosol", description: "super rosol", price: 13 },
        { id: 1, name: "rosol", description: "super rosol", price: 13 },
        { id: 1, name: "rosol", description: "super rosol", price: 13 },
      ],
      userId: 2,
      price: 52,
    },
    {
      id: 3,
      city: "asd",
      postalCode: "asd",
      street: "asd",
      buildingNumber: "asd",
      dishes: [
        { id: 1, name: "rosol", description: "super rosol", price: 13 },
        { id: 1, name: "rosol", description: "super rosol", price: 13 },
        { id: 1, name: "rosol", description: "super rosol", price: 13 },
        { id: 1, name: "rosol", description: "super rosol", price: 13 },
      ],
      userId: 2,
      price: 52,
    },
  ],
};

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
    default:
      return state;
  }
};

export default reducer;
