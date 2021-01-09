import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import authReducer from "../../store/auth/auth.reducer";
import registerReducer from "../../store/register/register.reducer";
import cartReducer from "../../store/cart/cart.reducer";
import dishReducer from "../../store/dish/dish.reducer";
import orderReducer from "../../store/order/order.reducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const rootReducers = combineReducers({
  authStore: authReducer,
  registerStore: registerReducer,
  cartStore: cartReducer,
  dishStore: dishReducer,
  orderStore: orderReducer,
});

const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
