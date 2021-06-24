import Favorite from "../src/components/Favorite/Favorite";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Views/About/About";
import Contacts from "./Views/Contacts/Contacts";
import Home from './Views/Home/Home'
import Promotions from "./Views/Promotions/Promotions";
import Sessions from "./Views/Sessions/Sessions";
import Showing from "./Views/Showing/Showing";
import Signup from './components/authentication/Signup/Signup';
import Login from './components/authentication/Login/Login';
import ForgotPassword from './components/authentication/ForgotPassword/ForgotPassword'
import { AuthProvider } from './contexts/AuthContext';
import CreateMovie from './Views/CreateMovie/CreateMovie'
import MovieDetailPage from './Views/MovieDetailPage/MovieDetailPage'



export default function Routes() {
    return (
        <Router>
            <AuthProvider>
                <Switch>
                    <Route path="/favorite" component={Favorite} />
                    <Route path="/signup" component={Signup} exact />
                    <Route path="/login" component={Login} />
                    <Route path="/forgot-password" component={ForgotPassword} exact />
                    <Route path="/" component={Home} exact />
                    <Route path="/showing" component={Showing} exact />
                    <Route path="/about" component={About} exact />
                    <Route path="/sessions" component={Sessions} exact />
                    <Route path="/contacts" component={Contacts} exact />
                    <Route path="/promotions" component={Promotions} exact />
                    <Route path="/create-movie" component={CreateMovie} exact />
                    <Route path="/movies/:id" component={MovieDetailPage} exact />
                </Switch>
            </AuthProvider>
        </Router>
    );
}
