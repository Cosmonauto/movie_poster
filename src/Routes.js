import Favorite from "../src/components/Favorite/Favorite";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Views/About/About";
import Contacts from "./Views/Contacts/Contacts";
import Home from "./Views/Home/Home";
import Promotions from "./Views/Promotions/Promotions";
import Sessions from "./Views/Sessions/Sessions";
import Showing from "./Views/Showing/Showing";
import SignUpServer from "./components/authentication/Server/SignUpWithServer/SignUpWithServer";
import Login from "./components/authentication/Firebase/Login/Login";
import ForgotPassword from "./components/authentication/Firebase/ForgotPassword/ForgotPassword";
import { AuthProvider } from "./contexts/AuthContext";
import CreateMovie from "./Views/CreateMovie/CreateMovie";
import MovieDetailPage from "./Views/MovieDetailPage/MovieDetailPage";
import SignupFirebase from "./components/authentication/Firebase/SignupFirebase/SignupFirebase";
import SignIn from "./components/authentication/Server/SignInWithServer/SignInWithServer";
import ForgotPasswordServer from "./components/authentication/Server/ForgotPasswordServer/ForgotPasswordServer";

export default function Routes() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/favorite" component={Favorite} exact />
          <Route path="/signup" component={SignupFirebase} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/signUpServer" component={SignUpServer} exact />
          <Route path="/signInServer" component={SignIn} exact />
          <Route path="/forgot-password" component={ForgotPassword} exact />
          <Route path="/" component={Home} exact />
          <Route path="/showing" component={Showing} exact />
          <Route path="/about" component={About} exact />
          <Route path="/sessions" component={Sessions} exact />
          <Route path="/contacts" component={Contacts} exact />
          <Route path="/promotions" component={Promotions} exact />
          <Route path="/createMovie" component={CreateMovie} exact />
          <Route path="/movies/:id" component={MovieDetailPage} exact />
          <Route
            path="/forgotPasswordServer"
            component={ForgotPasswordServer}
            exact
          />
        </Switch>
      </AuthProvider>
    </Router>
  );
}
