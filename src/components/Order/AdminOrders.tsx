import { Container } from "@material-ui/core";
import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { useDashboardStyles } from "../../shared/styles/DashboardStyles";
import Dish from "../../shared/types/dish/Dish";
import { OrderStatus } from "../../shared/types/order/Order";
import { StoreState, StoreDispatch } from "../../shared/types/store";
import { addDishToCart } from "../../store";
import {
  changeOrderStatus,
  getOrdersAdmin,
} from "../../store/order/order.action";
import { getOrders } from "../../store/order/order.reducer";
import OrderList from "./OrderList";

interface OrdersProps {
  loadOrders: () => void;
  changeOrderStatus: (orderId: number, status: OrderStatus) => void;
}

const AdminOrders = ({ loadOrders, changeOrderStatus }: OrdersProps) => {
  const classes = useDashboardStyles();
  useEffect(loadOrders, [loadOrders]);
  const orders = useSelector(getOrders);
  return (
    <Container maxWidth="lg" className={classes.container}>
      <OrderList
        changeOrderStatus={changeOrderStatus}
        orders={orders}
      ></OrderList>
    </Container>
  );
};

const mapStateToProps = (state: StoreState) => {
  return {};
};

const mapDispatchToProps = (dispatch: StoreDispatch) => {
  return {
    addDishClicked: (dish: Dish) => dispatch(addDishToCart(dish)),
    loadOrders: () => dispatch(getOrdersAdmin()),
    changeOrderStatus: (orderId: number, status: OrderStatus) =>
      dispatch(changeOrderStatus(orderId, status)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminOrders);
