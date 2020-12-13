import { Container, makeStyles } from "@material-ui/core";
import { connect } from "react-redux";
import React from "react";
import Dish from "../../shared/types/dish/Dish";
import { StoreState, StoreDispatch } from "../../shared/types/store";
import { addDishToCart, removeDishFromCart } from "../../store";
import CartList from "./CartList";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

export type CartProps = {
  dishes: any[];
  addDishClicked: (dish: Dish) => void;
  removeDishClicked: (dish: Dish) => void;
};

const Cart = ({ dishes, addDishClicked, removeDishClicked }: CartProps) => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      <CartList
        dishes={dishes}
        addDishClicked={addDishClicked}
        removeDishClicked={removeDishClicked}
      ></CartList>
    </Container>
  );
};

const mapStateToProps = (state: StoreState) => {
  return {
    dishes: state.cartStore.dishes,
  };
};

const mapDispatchToProps = (dispatch: StoreDispatch) => {
  return {
    addDishClicked: (dish: Dish) => dispatch(addDishToCart(dish)),
    removeDishClicked: (dish: Dish) => dispatch(removeDishFromCart(dish)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
