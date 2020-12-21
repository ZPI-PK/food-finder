import { List } from "@material-ui/core";
import React, { FC } from "react";
import useListStyles from "../../shared/styles/ListStyles";
import { DishGroup } from "../../shared/types/dish/DishGroup";
import CartItem from "./CartItem";

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
  const styles = useListStyles();
  return (
    <List className={styles.list}>
      {dishes.map((dish) => (
        <CartItem
          key={dish.id}
          addDishClicked={addDishClicked}
          removeDishClicked={removeDishClicked}
          dish={dish}
        ></CartItem>
      ))}
    </List>
  );
};

export default CartList;
