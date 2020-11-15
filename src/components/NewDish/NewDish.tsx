import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { NewDishForm } from "./NewDishForm";
import LocalDiningIcon from "@material-ui/icons/LocalDining";

const useStyles = makeStyles((theme) => ({
  login: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const NewDish = () => {
  const classes = useStyles();
  return (
    <div className={classes.login}>
      <Typography component="h1" variant="h5">
        Dodaj nowe danie
      </Typography>
      <LocalDiningIcon fontSize="large"></LocalDiningIcon>
      <NewDishForm></NewDishForm>
    </div>
  );
};
