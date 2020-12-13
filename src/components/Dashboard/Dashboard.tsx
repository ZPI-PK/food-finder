import { Container, Grid, Paper, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { connect } from "react-redux";
import React from "react";
import Dish from "../../shared/types/dish/Dish";
import { StoreState, StoreDispatch } from "../../shared/types/store";
import { addDishToCart } from "../../store";
import DishList from "../DishList/DishList";

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

export type DashboardProps = {
  dishes: any[];
  addDishClicked: (dish: Dish) => void;
};

const Dashboard = ({ dishes, addDishClicked }: DashboardProps) => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

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
    dishes: [
      {
        id: 1,
        name: "Pizza",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        price: 100,
      },
    ],
  };
};

const mapDispatchToProps = (dispatch: StoreDispatch) => {
  return {
    addDishClicked: (dish: Dish) => dispatch(addDishToCart(dish)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
