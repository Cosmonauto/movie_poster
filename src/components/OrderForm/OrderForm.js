import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import * as Yup from "yup";
import { Button, TextField, Typography, Input } from "@material-ui/core";
import classes from "../../Views/CreateMovie/createMovie.module.css";
import TextError from "../../components/TextError/index";
import { movieContext } from "../../contexts/MovieContext";
import { notifySuccess } from "../../helpers/notifiers";
import { useHistory } from "react-router";
import { ErrorMessage, Field, Form, Formik } from "formik";

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
    fetchHalls();
    fetchTime();
    fetchPlaces();
  }, []);

  const initialValues = {
    movie: null,
    time: null,
    place: null,
  };

  const validationSchema = Yup.object({
    movie: Yup.string().required("Обязательное поле!"),
    time: Yup.string().required("Обязательное поле!"),
    // Yup.number()
    //   .typeError("Введите число!")
    //   .required("Обязательное поле!"),
    price: Yup.number()
      .typeError("Введите число!")
      .required("Обязательное поле!"),
  });
  //   console.log(time);
  //   console.log(halls);

  const onSubmit = (values, actions) => {
    const formData = new FormData();

    // console.log(values.images);
    formData.append("movie", values.movie);
    formData.append("time", values.time);
    formData.append("place", values.place);
    // console.log(values)

    createOrder(formData).then(() => {
      actions.resetForm();
      history.push("/");
      notifySuccess("Бронь успешно выполнена!");
    });
  };
  return (
    <div>
      <Navbar />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values, setFieldValue }) => (
          <>
            <Form className={classes.form}>
              <Typography variant="h3" style={{ fontWeight: "bold" }}>
                Book
              </Typography>
              <label>Movie Name</label>
              <Field
                className={classes.input}
                name="movie"
                variant="outlined"
                as="select"
              >
                <option>Select Movie</option>
                {movies.map((movie) => (
                  <option value={movie.id}>{movie.title}</option>
                ))}
              </Field>
              <ErrorMessage component={TextError} name="movie" />

              <label>Time</label>
              <Field
                className={classes.input}
                name="time"
                variant="outlined"
                as="select"
              >
                <option>Select Time</option>
                {time.map((hour) => (
                  <option value={hour.id}>{hour.time}</option>
                ))}
              </Field>
              <ErrorMessage component={TextError} name="time" />

              <label>Place</label>
              <Field
                className={classes.input}
                name="place"
                variant="outlined"
                as="select"
              >
                <option>Select Place</option>
                {places.map((place) => (
                  <option value={place.place}>{place.place}</option>
                ))}
              </Field>
              <ErrorMessage component={TextError} name="title" />
              <label>Hall</label>
              <Field
                className={classes.input}
                name="hall"
                variant="outlined"
                as="select"
              >
                <option>Select Hall</option>
                {halls.map((hall) => (
                  <option value={hall.name}>{hall.name}</option>
                ))}
              </Field>
              <ErrorMessage component={TextError} name="title" />

              <Button type="submit" color="primary" variant="contained">
                Create
              </Button>
            </Form>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </>
        )}
      </Formik>
    </div>
  );
}

export default OrderForm;
