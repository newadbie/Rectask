import { FC } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppBarComp from "./components/AppBar";
import Homepage from "./containers/homepage";


const App: FC = () => {
  return (
    <Router>
      <AppBarComp />
      <Switch>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
