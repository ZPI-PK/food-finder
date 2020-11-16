import { Avatar, Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Copyright from "../UI/Copyright/Copyright";
import LoginForm from "./LoginForm/LoginForm";

interface LoginProps {}

const useStyles = makeStyles((theme) => ({
  login: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}));

const Login: React.FC<LoginProps> = (props) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.login}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          Logowanie
        </Typography>
        <LoginForm />
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </>
  );
};

export default Login;
