import { Container, Grid, Paper } from "@material-ui/core";
import clsx from "clsx";
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

const AdminDashboard = ({
  dishes,
  addDishClicked,
  loadDishes,
}: DashboardProps) => {
  const classes = useDashboardStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  useEffect(loadDishes, [loadDishes]);

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={fixedHeightPaper}></Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}></Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          {/* <Paper className={classes.paper}></Paper> */}
        </Grid>
        <DishList dishes={dishes} addDishClicked={addDishClicked}></DishList>
      </Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);
