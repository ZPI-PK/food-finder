import {
  ListItem,
  Card,
  CardHeader,
  CardContent,
  Typography,
} from "@material-ui/core";
import React, { FC } from "react";
import useListStyles from "../../shared/styles/ListStyles";
import { Order } from "../../shared/types/order/Order";

interface DishItemProps {
  order: Order;
}

const OrderItem: FC<DishItemProps> = ({ order }) => {
  const styles = useListStyles();
  return (
    <ListItem key={order.id}>
      <Card className={styles.listItem}>
        <CardHeader title={`Zamówienie numer ${order.id}`}></CardHeader>
        <CardContent>
          <Typography>
            {`Adres: ${order.street} ${order.buildingNumber}, ${order.buildingNumber} ${order.city}`}
          </Typography>
          <Typography>{order.dishes.map((p) => p.name).join(", ")}</Typography>
          <Typography>{order.price} PLN</Typography>
        </CardContent>
      </Card>
    </ListItem>
  );
};
export default OrderItem;
