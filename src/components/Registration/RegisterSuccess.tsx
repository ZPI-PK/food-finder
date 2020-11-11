import React from "react";
import { Container, Link, makeStyles } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const RegisterSuccess = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <h1>Rejestracja pomyślna</h1>
      <Link component={RouterLink} to="/">
        Wróć na stronę główną
      </Link>
    </Container>
  );
};

export default RegisterSuccess;
