import {
  ListItem,
  Card,
  CardHeader,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import useListStyles from "../../shared/styles/ListStyles";
import Dish from "../../shared/types/dish/Dish";
import { DishGroup } from "../../shared/types/dish/DishGroup";
import { Order, OrderStatus } from "../../shared/types/order/Order";
import { getIsAdmin } from "../../store/auth/auth.reducer";

interface DishItemProps {
  order: Order;
  changeOrderStatus: (orderId: number, status: OrderStatus) => void;
}

const groupBy = (items: Dish[]): { [key: string]: DishGroup } =>
  items.reduce((result: { [key: string]: DishGroup }, item) => {
    const obj = result[item.id] || { ...item, count: 0 };
    obj.count += 1;
    return {
      ...result,
      [item.id]: obj,
    };
  }, {});

const getOrderStatusText = (order: Order) => {
  switch (order.status) {
    case "CREATED":
      return "Oczekujące";
    case "DURING":
      return "W przygotowaniu";
    case "DONE":
      return "Zakończone";
  }
};

const getAdminButtonText = (order: Order) => {
  switch (order.status) {
    case "CREATED":
      return "Przyjmij";
    case "DURING":
      return "Zakończ";
  }
};
const getAdminButtonAction = (order: Order): OrderStatus => {
  switch (order.status) {
    case "CREATED":
      return "DURING";
    default:
      return "DONE";
  }
};

const OrderItem: FC<DishItemProps> = ({ order, changeOrderStatus }) => {
  const styles = useListStyles();
  const dishesGroupped = groupBy(order.dishes);
  const isAdmin = useSelector(getIsAdmin);

  return (
    <ListItem key={order.id}>
      <Card className={styles.listItem}>
        <CardHeader
          title={`Zamówienie numer ${order.id} - ${getOrderStatusText(order)}`}
        ></CardHeader>
        <CardContent>
          <Typography>
            {`Adres: ${order.street} ${order.buildingNumber}, ${order.postalCode} ${order.city}`}
          </Typography>

          {Object.keys(dishesGroupped).map((p) => (
            <Typography
              key={dishesGroupped[p].id}
            >{`${dishesGroupped[p].name} x${dishesGroupped[p].count}`}</Typography>
          ))}

          <Typography>{order.price} PLN</Typography>
        </CardContent>
        {isAdmin && order.status !== "DONE" && (
          <CardActions>
            <Button
              onClick={() =>
                changeOrderStatus(order.id, getAdminButtonAction(order))
              }
            >
              {getAdminButtonText(order)}
            </Button>
          </CardActions>
        )}
      </Card>
    </ListItem>
  );
};
export default OrderItem;
