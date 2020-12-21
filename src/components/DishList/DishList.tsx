import { List } from "@material-ui/core";
import React, { FC } from "react";
import useListStyles from "../../shared/styles/ListStyles";
import Dish from "../../shared/types/dish/Dish";
import DishItem from "./DishItem";

interface DishListProps {
  dishes: any[];
  addDishClicked: (dish: Dish) => void;
}

const DishList: FC<DishListProps> = ({ dishes, addDishClicked }) => {
  const styles = useListStyles();
  return (
    <List className={styles.list}>
      {dishes.map((dish) => (
        <DishItem
          key={dish.id}
          dish={dish}
          addDishClicked={addDishClicked}
        ></DishItem>
      ))}
    </List>
  );
};

export default DishList;
