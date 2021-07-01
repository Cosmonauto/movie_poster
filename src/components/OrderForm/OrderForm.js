import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import * as Yup from "yup";
import { Button, TextField, Typography, Input } from "@material-ui/core";
// import classes from "../../Views/CreateMovie/createMovie.module.css";
import TextError from "../../components/TextError/index";
import { movieContext } from "../../contexts/MovieContext";
import { notifySuccess } from "../../helpers/notifiers";
import { useHistory } from "react-router";
import { ErrorMessage, Field, Form, Formik } from "formik";
import classes from "./orderForm.module.css";
import Footer from '../Footer/Footer';


function OrderForm(props) {
  const {
    fetchAllMovies,
    movies,
    createOrder,
    orders,
    fetchOrders,
    fetchHalls,
    halls,
    fetchTime,
    time,
    fetchPlaces,
    places,
  } = useContext(movieContext);

  const history = useHistory();
  useEffect(() => {
    fetchAllMovies();
    fetchOrders();
    // fetchHalls();
    fetchTime();
    fetchPlaces();
  }, []);
  const [stateMovie, setStateMovie] = useState("");
  const [stateTime, setStateTime] = useState("");
  const [statePlace, setStatePlace] = useState("");

  const submit = (movie, time, place) => {
    createOrder({
      movie: movie,
      time: time,
      place: place,
    }).then(() => {
      history.push("/");
      notifySuccess("Бронь успешно выполнена!Проверьте историю брони ");
    });
  };

  return (
    <>
      <Navbar />

      <div className={classes.formDiv}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submit(stateMovie, stateTime, statePlace);
          }}
          className={classes.form}
        >
          <h3
            style={{ color: "#fff", marginLeft: "auto", marginRight: "auto" }}
          >
            Book some ticket
          </h3>
          {/* <div className={classes.titel}>
          
        </div> */}

          <select
            onChange={(e) => {
              setStateMovie(e.target.value);
            }}
          >
            <option>Select Movie</option>
            {movies.map((movie) => (
              <option value={movie.id}>{movie.title}</option>
            ))}
          </select>
          <select
            onChange={(e) => {
              setStateTime(e.target.value);
            }}
          >
            <option>Select Time</option>
            {time.map((hour) => (
              <option value={hour.id}>{hour.time}</option>
            ))}
          </select>
          <select
            onChange={(e) => {
              setStatePlace(e.target.value);
            }}
          >
            {" "}
            <option>Select Place</option>
            {places.map((place) => (
              <option value={place.id}>{place.place}</option>
            ))}
          </select>
          <button type="submit">GO</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default OrderForm;
