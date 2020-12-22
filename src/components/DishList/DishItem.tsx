import {
  ListItem,
  Card,
  CardHeader,
  CardContent,
  Typography,
  CardActions,
  IconButton,
} from "@material-ui/core";
import Add from "@material-ui/icons/Add";
import React, { FC } from "react";
import useListStyles from "../../shared/styles/ListStyles";
import Dish from "../../shared/types/dish/Dish";

interface DishItemProps {
  dish: Dish;
  addDishClicked: (dish: Dish) => void;
}

const DishItem: FC<DishItemProps> = ({ dish, addDishClicked }) => {
  const styles = useListStyles();
  return (
    <ListItem key={dish.id}>
      <Card className={styles.listItem}>
        <CardHeader title={dish.name}></CardHeader>
        <CardContent>
          {dish.description}
          <Typography component="h5" variant="h5" style={{ paddingTop: "1em" }}>
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
  );
};
export default DishItem;
