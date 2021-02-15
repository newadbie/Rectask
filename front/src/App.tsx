import React, { FC } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppBarComp from "./components/AppBar";
import Basket from "./containers/basket";
import Homepage from "./containers/homepage";

import { useSelector } from "react-redux";
import { IsLoading } from "./selectors";
import { CircularProgress, Modal } from "@material-ui/core";

const App: FC = () => {
  const isLoading = useSelector(IsLoading);

  return (
    <Router>
      <AppBarComp />
      <Switch>
        <Route path="/basket" exact>
          <Basket />
        </Route>
        <Route path="/" exact>
          <Homepage />
        </Route>
      </Switch>
      <Modal className="Modal" open={isLoading} >
        <CircularProgress className="Modal--progress" color="secondary" />
      </Modal>
    </Router>
  );
};

export default App;
