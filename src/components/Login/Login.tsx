import { Avatar, Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import LoginRequest from "../../shared/types/auth/LoginRequest";
import { StoreDispatch, StoreState } from "../../shared/types/store";
import * as action from "../../store";

import Copyright from "../UI/Copyright/Copyright";
import LoginForm from "./LoginForm/LoginForm";

interface LoginProps {
  authLoading: boolean;
  error: string | null;
  onAuth: (authData: LoginRequest) => void;
}

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
  const { onAuth } = props;
  const classes = useStyles();

  return (
    <>
      <div className={classes.login}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          Logowanie
        </Typography>
        <LoginForm onAuth={onAuth} />
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </>
  );
};

const mapStateToProps = (state: StoreState) => {
  return {
    authLoading: state.authStore.authLoading,
    error: state.authStore.error,
  };
};

const mapDispatchToProps = (dispatch: StoreDispatch) => {
  return {
    onAuth: (authData: LoginRequest) => dispatch(action.auth(authData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
