import { List } from "@material-ui/core";
import React, { FC } from "react";
import useListStyles from "../../shared/styles/ListStyles";
import { Order } from "../../shared/types/order/Order";
import OrderItem from "./OrderItem";

interface OrderListProps {
  orders: Order[];
}

const DishList: FC<OrderListProps> = ({ orders }) => {
  const styles = useListStyles();
  return (
    <List className={styles.list}>
      {orders.map((order) => (
        <OrderItem key={order.id} order={order}></OrderItem>
      ))}
    </List>
  );
};

export default DishList;
