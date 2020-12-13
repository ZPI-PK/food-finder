import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@material-ui/core";
import { Remove } from "@material-ui/icons";
import Add from "@material-ui/icons/Add";
import React, { FC } from "react";
import { DishGroup } from "../../shared/types/dish/DishGroup";

interface CartListProps {
  dishes: any[];
  addDishClicked: (dish: DishGroup) => void;
  removeDishClicked: (dish: DishGroup) => void;
}

const CartList: FC<CartListProps> = ({
  dishes,
  addDishClicked,
  removeDishClicked,
}) => {
  return (
    <List>
      {dishes.map((dish) => (
        <ListItem key={dish.id}>
          <Card style={{ flexGrow: 1 }}>
            <CardHeader
              title={
                dish.count === 1 ? dish.name : `${dish.count} x ${dish.name}`
              }
            ></CardHeader>
            <CardContent>
              {dish.description}
              <Typography
                component="h5"
                variant="h5"
                style={{ paddingTop: "1em" }}
              >
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
      ))}
    </List>
  );
};

export default CartList;
