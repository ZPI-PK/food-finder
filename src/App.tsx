import React from "react";
import "./App.css";

import RegistrationForm from "./RegistrationForm";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import RegisterSuccess from "./RegisterSuccess";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path="/">
              <Link to="/register">Rejestracja</Link>
            </Route>
            <Route exact path="/register">
              <RegistrationForm></RegistrationForm>
            </Route>
            <Route exact path="/register-success">
              <RegisterSuccess></RegisterSuccess>
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
};

export default App;
