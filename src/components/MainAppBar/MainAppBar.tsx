import { AppBar, Button, Toolbar } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { StoreState } from "../../shared/types/store";

interface MainAppBarProps {
  authenticated: boolean;
}

const MainAppBar: React.FC<MainAppBarProps> = ({ authenticated }) => {
  const history = useHistory();
  return (
    <AppBar position="static">
      <Toolbar>
        {authenticated && (
          <Button color="inherit" onClick={() => history.push("/logout")}>
            {"Wyloguj się"}
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = (state: StoreState) => {
  return {
    authenticated: state.authStore.accessToken !== null,
  };
};

export default connect(mapStateToProps)(MainAppBar);
