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
import MovieCard from "./components/MovieCard/MovieCard";
import FormPage from "./components/PaymentForm/FormOrder/FormPage";
import PaymentForm from "./components/PaymentForm/CreditCard/PaymentForm";
import SearchResultPage from "./components/SearchResultPage/SearchResultPage";
import FilterResultPage from "./components/FilterResultPage/FilterResultPage";
import GenrePage from "./Views/GenrePage/GenrePage";
import MovieUpdatePage from "./Views/MovieUpdatePage/MovieUpdatePage";
import CommentsCreate from "./components/Comments/CommentsCreate";
import CommentsPage from "./components/Comments/CommentsPage";
import ForgotPasswordSecondPage from "./components/authentication/Server/ForgotPasswordServer/ForgotPasswordSecondPage";
import BestMovies from "./components/BestMovies/BestMovies";

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
          <Route path="/movie/:id" component={MovieDetailPage} exact />
          <Route
            path="/forgotPasswordServer"
            component={ForgotPasswordServer}
            exact
          />
          <Route
            path="/movie/password_reset/confirm/"
            component={ForgotPasswordSecondPage}
            exact
          />
          <Route path="/movies/:id/update" component={MovieUpdatePage} exact />
          <Route path="/movieCard" component={MovieCard} exact />
          <Route path="/genre/:id" component={GenrePage} exact />
          <Route path="/checkout" component={FormPage} exact />
          <Route path="/payment" component={PaymentForm} exact />
          <Route
            path="/movie/search/:searchValue"
            component={SearchResultPage}
            exact
          />
          <Route
            path="/movie/filter/:filterValue"
            component={FilterResultPage}
            exact
          />
          <Route
            path="/movie/comments/create/:id"
            component={CommentsCreate}
            exact
          />
          <Route path="/movie/comments/:id" component={CommentsPage} exact />
          <Route path="/best-movies" component={BestMovies} exact />
        </Switch>
      </AuthProvider>
    </Router>
  );
}
