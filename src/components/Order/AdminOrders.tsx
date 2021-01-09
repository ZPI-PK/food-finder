import { Container } from "@material-ui/core";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useDashboardStyles } from "../../shared/styles/DashboardStyles";
import Dish from "../../shared/types/dish/Dish";
import { Order } from "../../shared/types/order/Order";
import { StoreState, StoreDispatch } from "../../shared/types/store";
import { addDishToCart } from "../../store";
import { getOrders } from "../../store/order/order.action";
import OrderList from "./OrderList";

interface OrdersProps {
  orders: Order[];
  loadOrders: () => void;
}

const AdminOrders = ({ orders, loadOrders }: OrdersProps) => {
  const classes = useDashboardStyles();
  useEffect(loadOrders, [loadOrders]);

  return (
    <Container maxWidth="lg" className={classes.container}>
      <OrderList orders={orders}></OrderList>
    </Container>
  );
};

const mapStateToProps = (state: StoreState) => {
  return {
    orders: state.orderStore.orders,
  };
};

const mapDispatchToProps = (dispatch: StoreDispatch) => {
  return {
    addDishClicked: (dish: Dish) => dispatch(addDishToCart(dish)),
    loadOrders: () => dispatch(getOrders()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminOrders);
