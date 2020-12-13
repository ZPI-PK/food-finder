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
import Add from "@material-ui/icons/Add";
import React, { FC } from "react";
import Dish from "../../shared/types/dish/Dish";

interface DishListProps {
  dishes: any[];
  addDishClicked: (dish: Dish) => void;
}

const DishList: FC<DishListProps> = ({ dishes, addDishClicked }) => {
  return (
    <List>
      {dishes.map((dish) => (
        <ListItem key={dish.id}>
          <Card style={{ flexGrow: 1 }}>
            <CardHeader title={dish.name}></CardHeader>
            <CardContent>
              {dish.description}
              <Typography
                component="h5"
                variant="h5"
                style={{ paddingTop: "1em" }}
              >
                {dish.price} PLN
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton onClick={() => addDishClicked(dish)}>
                <Add></Add>
              </IconButton>
            </CardActions>
          </Card>
        </ListItem>
      ))}
    </List>
  );
};

export default DishList;
