import { List } from "@material-ui/core";
import React, { FC } from "react";
import useListStyles from "../../shared/styles/ListStyles";
import { Order, OrderStatus } from "../../shared/types/order/Order";
import OrderItem from "./OrderItem";

interface OrderListProps {
  orders: Order[];
  changeOrderStatus: (orderId: number, status: OrderStatus) => void;
}

const DishList: FC<OrderListProps> = ({ orders, changeOrderStatus }) => {
  const styles = useListStyles();
  return (
    <List className={styles.list}>
      {orders.map((order) => (
        <OrderItem
          key={order.id}
          order={order}
          changeOrderStatus={changeOrderStatus}
        ></OrderItem>
      ))}
    </List>
  );
};

export default DishList;
