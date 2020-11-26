import { Container } from "@material-ui/core";
import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import * as action from "../../store";
import { StoreDispatch, StoreState } from "../../shared/types/store";
import Login from "../Login/Login";
import { NewDish } from "../NewDish/NewDish";
import RegisterSuccess from "../Registration/RegisterSuccess";
import Registration from "../Registration/Registration";
import Logout from "../Logout/Logout";
import Dashboard from "../Dashboard/Dashboard";

interface AppProps {
  authenticated: boolean;
  onAuthCheck: () => void;
}

const App: React.FC<AppProps> = (props) => {
  const { authenticated, onAuthCheck } = props;

  useEffect(() => {
    onAuthCheck();
  }, [onAuthCheck]);

  return (
    <Container component="main" maxWidth="xs">
      {!authenticated ? (
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Registration} />
          <Route exact path="/register-success" component={RegisterSuccess} />
          <Route exact path="/add-dish" component={NewDish} />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/logout" component={Logout} />
          <Route path="/" component={Dashboard} />
        </Switch>
      )}
    </Container>
  );
};

const mapStateToProps = (state: StoreState) => {
  return {
    authenticated: state.authStore.accessToken !== null,
  };
};

const mapDispatchToProps = (dispatch: StoreDispatch) => {
  return {
    onAuthCheck: () => dispatch(action.authCheck()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
