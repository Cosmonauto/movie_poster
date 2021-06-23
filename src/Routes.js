import Favorite from "../src/components/Favorite/Favorite";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Views/Home/Home";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/favorite" component={Favorite} />
      </Switch>
    </Router>
  );
}
