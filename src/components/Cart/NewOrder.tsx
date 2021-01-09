import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { NewOrderForm } from "./NewOrderForm";

const useStyles = makeStyles((theme) => ({
  login: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const NewOrder = () => {
  const classes = useStyles();
  return (
    <div className={classes.login}>
      <Typography component="h1" variant="h5">
        Dane zamówienia
      </Typography>
      <NewOrderForm></NewOrderForm>
    </div>
  );
};
