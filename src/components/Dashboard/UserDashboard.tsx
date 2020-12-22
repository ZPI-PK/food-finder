import { Container } from "@material-ui/core";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import Dish from "../../shared/types/dish/Dish";
import { StoreState, StoreDispatch } from "../../shared/types/store";
import { addDishToCart } from "../../store";
import DishList from "../DishList/DishList";
import { getDishes } from "../../store/dish/dish.action";
import { useDashboardStyles } from "../../shared/styles/DashboardStyles";

interface DashboardProps {
  dishes: any[];
  addDishClicked: (dish: Dish) => void;
  loadDishes: () => void;
}

const UserDashboard = ({
  dishes,
  addDishClicked,
  loadDishes,
}: DashboardProps) => {
  const classes = useDashboardStyles();
  useEffect(loadDishes, [loadDishes]);

  return (
    <Container maxWidth="lg" className={classes.container}>
      <DishList dishes={dishes} addDishClicked={addDishClicked}></DishList>
    </Container>
  );
};

const mapStateToProps = (state: StoreState) => {
  return {
    dishes: state.dishStore.dishes,
  };
};

const mapDispatchToProps = (dispatch: StoreDispatch) => {
  return {
    addDishClicked: (dish: Dish) => dispatch(addDishToCart(dish)),
    loadDishes: () => dispatch(getDishes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);
