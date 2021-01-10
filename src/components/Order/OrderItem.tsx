import {
  ListItem,
  Card,
  CardHeader,
  CardContent,
  Typography,
} from "@material-ui/core";
import React, { FC } from "react";
import useListStyles from "../../shared/styles/ListStyles";
import Dish from "../../shared/types/dish/Dish";
import { DishGroup } from "../../shared/types/dish/DishGroup";
import { Order } from "../../shared/types/order/Order";

interface DishItemProps {
  order: Order;
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

const OrderItem: FC<DishItemProps> = ({ order }) => {
  const styles = useListStyles();
  const dishesGroupped = groupBy(order.dishes);
  return (
    <ListItem key={order.id}>
      <Card className={styles.listItem}>
        <CardHeader title={`Zamówienie numer ${order.id}`}></CardHeader>
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
      </Card>
    </ListItem>
  );
};
export default OrderItem;
