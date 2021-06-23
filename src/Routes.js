import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Views/About/About";
import Contacts from "./Views/Contacts/Contacts";
import Home from './Views/Home/Home'
import Promotions from "./Views/Promotions/Promotions";
import Sessions from "./Views/Sessions/Sessions";
import Showing from "./Views/Showing/Showing";



export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/showing" component={Showing} exact />
                <Route path="/about" component={About} exact />
                <Route path="/sessions" component={Sessions} exact />
                <Route path="/contacts" component={Contacts} exact />
                <Route path="/promotions" component={Promotions} exact />
            </Switch>
        </Router>
    );
}
