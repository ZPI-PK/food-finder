import {
  ListItem,
  Card,
  CardHeader,
  CardContent,
  Typography,
  CardActions,
  IconButton,
} from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import Add from "@material-ui/icons/Add";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import useListStyles from "../../shared/styles/ListStyles";
import Dish from "../../shared/types/dish/Dish";
import { getIsAdmin } from "../../store/auth/auth.reducer";

interface DishItemProps {
  dish: Dish;
  addDishClicked: (dish: Dish) => void;
}

const DishItem: FC<DishItemProps> = ({ dish, addDishClicked }) => {
  const styles = useListStyles();
  const isAdmin = useSelector(getIsAdmin);
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
            {isAdmin ? <Edit></Edit> : <Add></Add>}
          </IconButton>
        </CardActions>
      </Card>
    </ListItem>
  );
};
export default DishItem;
