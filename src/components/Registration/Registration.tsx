import { Avatar, Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import RegisterRequest from "../../shared/types/register/RegisterRequest";
import { StoreDispatch, StoreState } from "../../shared/types/store";
import Copyright from "../UI/Copyright/Copyright";
import RegistrationForm from "./RegistrationForm/RegistrationForm";
import * as action from "../../store";
import * as H from "history";

interface RegistrationProps {
  onRegister: (request: RegisterRequest, history: H.History<any>) => void;
}

const useStyles = makeStyles((theme) => ({
  registration: {
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

const Registration: React.FC<RegistrationProps> = (props) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <div className={classes.registration}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          Załóż konto
        </Typography>
        <RegistrationForm
          onRegister={(request) => props.onRegister(request, history)}
        />
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </>
  );
};
const mapStateToProps = (state: StoreState) => {
  return {
    registerLoading: state.registerStore.registerLoading,
    error: state.registerStore.error,
  };
};

const mapDispatchToProps = (dispatch: StoreDispatch) => {
  return {
    onRegister: (request: RegisterRequest, history: H.History<any>) =>
      dispatch(action.register(request, history)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
