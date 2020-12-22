import { Container } from "@material-ui/core";
import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { connect, useSelector } from "react-redux";

import * as action from "../../store";
import { StoreDispatch, StoreState } from "../../shared/types/store";
import Login from "../Login/Login";
import { NewDish } from "../NewDish/NewDish";
import RegisterSuccess from "../Registration/RegisterSuccess";
import Registration from "../Registration/Registration";
import Logout from "../Logout/Logout";
import AdminDashboard from "../Dashboard/AdminDashboard";
import Layout from "../Layout/Layout";
import Cart from "../Cart/Cart";
import { getIsAdmin } from "../../store/auth/auth.reducer";
import UserDashboard from "../Dashboard/UserDashboard";

interface AppProps {
  authenticated: boolean;
  onAuthCheck: () => void;
}

const App: React.FC<AppProps> = (props) => {
  const { authenticated, onAuthCheck } = props;
  const isAdmin = useSelector(getIsAdmin);
  useEffect(() => {
    onAuthCheck();
  }, [onAuthCheck]);

  return (
    <div>
      {!authenticated ? (
        <Container component="main" maxWidth="xs">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Registration} />
            <Route exact path="/register-success" component={RegisterSuccess} />
          </Switch>
        </Container>
      ) : isAdmin ? (
        <Layout>
          <Switch>
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/" component={AdminDashboard} />
            <Route exact path="/add-dish" component={NewDish} />
          </Switch>
        </Layout>
      ) : (
        <Layout>
          <Switch>
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/" component={UserDashboard} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
        </Layout>
      )}
    </div>
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
