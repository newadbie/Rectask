import { FC } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppBarComp from "./components/AppBar";
import Basket from "./containers/basket";
import Homepage from "./containers/homepage";

const App: FC = () => {
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
    </Router>
  );
};

export default App;
