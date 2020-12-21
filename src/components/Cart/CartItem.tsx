import {
  ListItem,
  Card,
  CardHeader,
  CardContent,
  Typography,
  CardActions,
  IconButton,
} from "@material-ui/core";
import { Remove } from "@material-ui/icons";
import Add from "@material-ui/icons/Add";
import React, { FC } from "react";
import useListStyles from "../../shared/styles/ListStyles";
import { DishGroup } from "../../shared/types/dish/DishGroup";

interface CartItemProps {
  dish: DishGroup;
  addDishClicked: (dish: DishGroup) => void;
  removeDishClicked: (dish: DishGroup) => void;
}

const CartItem: FC<CartItemProps> = ({
  dish,
  addDishClicked,
  removeDishClicked,
}) => {
  const styles = useListStyles();
  return (
    <ListItem key={dish.id}>
      <Card className={styles.listItem}>
        <CardHeader
          title={dish.count === 1 ? dish.name : `${dish.count} x ${dish.name}`}
        ></CardHeader>
        <CardContent>
          {dish.description}
          <Typography component="h5" variant="h5" style={{ paddingTop: "1em" }}>
            {dish.price * dish.count} PLN
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton onClick={() => addDishClicked(dish)}>
            <Add></Add>
          </IconButton>
          <IconButton onClick={() => removeDishClicked(dish)}>
            <Remove></Remove>
          </IconButton>
        </CardActions>
      </Card>
    </ListItem>
  );
};
export default CartItem;
