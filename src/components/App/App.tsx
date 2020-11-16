import { Container } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../Login/Login";
import { NewDish } from "../NewDish/NewDish";
import RegisterSuccess from "../Registration/RegisterSuccess";
import Registration from "../Registration/Registration";

const App = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Registration} />
          <Route exact path="/register-success" component={RegisterSuccess} />
          <Route exact path="/add-dish" component={NewDish} />
        </Switch>
      </Router>
    </Container>
  );
};

export default App;
