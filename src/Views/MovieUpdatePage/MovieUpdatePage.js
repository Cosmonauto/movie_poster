import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import { movieContext } from "../../contexts/MovieContext";
import * as Yup from "yup";
import { Button, TextField, Typography } from "@material-ui/core";
import classes from "./movieUpdate.module.css";
import TextError from "../../components/TextError";
import Navbar from "../../components/Navbar/Navbar";
import { notifySuccess } from "../../helpers/notifiers";
import { useHistory, useParams } from "react-router";

export default function MovieUpdatePage() {
  const [initialValues, setInitialValues] = useState({
    title: "",
    descriptions: "",

    duration: "",
    price: null,
    genre: "",
    year: "",
    producer: "",
    age_limit: "",
    country: "",
    image: "",
    quantity: null,
  });

  const { id } = useParams();

  const { fetchMovieDetail, movieDetail, updateMovie } =
    useContext(movieContext);

  useEffect(() => {
    fetchMovieDetail(id);
  }, []);

  useEffect(() => {
    if (movieDetail) {
      setInitialValues({
        ...movieDetail,
        // images: movieDetail.images[0],
      });
    }
  }, [movieDetail]);

  const history = useHistory();

  const validationSchema = Yup.object({
    title: Yup.string().required("Обязательное поле!"),
    // descriptions: Yup.string().required("Обязательное поле!"),
    genre: Yup.string().required("Обязательное поле!"),
    duration: Yup.string().required("Обязательное поле!"),
    price: Yup.number()
      .typeError("Введите число!")
      .required("Обязательное поле!"),
    image: Yup.string().required("Обязательное поле!"),
    year: Yup.number()
      .typeError("Введите число!")
      .required("Обязательное поле!"),
    producer: Yup.string().required("Обязательное поле!"),
    age_limit: Yup.string().required("Обязательное поле!"),
    country: Yup.string().required("Обязательное поле!"),
    // rating: Yup.number()
    //   .typeError("Введите число!")
    //   .required("Обязательное поле!"),
    quantity: Yup.number()
      .typeError("Введите число!")
      .required("Обязательное поле!"),
    // likes: Yup.number()
    //   .typeError("Введите число!")
    //   .required("Обязательное поле!"),
  });
  const onSubmit = (values) => {
    console.log(values);
    updateMovie(id, {
      ...values,
      // images: [values.images],
    }).then(() => {
      notifySuccess("Продукт был изменен!");
      history.push(`/movie/${id}`);
    });
  };

  return (
    <>
      <Navbar />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {({}) => (
          <>
            <Typography variant="h4">Изменение продукта</Typography>
            <Form className={classes.form}>
              <label>Movie Name</label>
              <Field
                className={classes.input}
                name="title"
                variant="outlined"
                as={TextField}
              />
              <ErrorMessage component={TextError} name="title" />
              <ErrorMessage component={TextError} name="title" />
              <label>Image</label>
              <Field
                className={classes.input}
                name="images"
                variant="outlined"
                as={TextField}
              />

              <label>Description</label>
              <Field
                variant="outlined"
                className={classes.input}
                rows={8}
                multiline
                name="descriptions"
                as={TextField}
              />
              <ErrorMessage component={TextError} name="description" />

              <label>Genre</label>
              <Field
                variant="outlined"
                className={classes.input}
                rows={8}
                multiline
                name="genre"
                as="select"
              />
              <ErrorMessage component={TextError} name="genre" />

              <label>Duration</label>
              <Field
                className={classes.input}
                name="duration"
                variant="outlined"
                as={TextField}
              />
              <ErrorMessage component={TextError} name="duration" />

              <label>Price</label>
              <Field
                className={classes.input}
                name="price"
                variant="outlined"
                as={TextField}
              />
              <ErrorMessage component={TextError} name="price" />

              {/* <label>Image(s)</label>
            <Field
              className={classes.input}
              name="images"
              variant="outlined"
              as={TextField}
            />
            <ErrorMessage component={TextError} name="images" /> */}

              <label>Year</label>
              <Field
                className={classes.input}
                name="year"
                variant="outlined"
                as={TextField}
              />
              <ErrorMessage component={TextError} name="year" />

              <label>Producer</label>
              <Field
                className={classes.input}
                name="producer"
                variant="outlined"
                as={TextField}
              />
              <ErrorMessage component={TextError} name="producer" />

              <label>Age Limit</label>
              <Field
                className={classes.input}
                name="age_limit"
                variant="outlined"
                as={TextField}
              />
              <ErrorMessage component={TextError} name="ageLimit" />

              <label>Country</label>
              <Field
                className={classes.input}
                name="country"
                variant="outlined"
                as={TextField}
              />
              <ErrorMessage component={TextError} name="country" />
              {/* <label>Rating</label>
            <Field
              className={classes.input}
              name="rating"
              variant="outlined"
              as={TextField}
            />
            <ErrorMessage component={TextError} name="rating" /> */}
              <label>Quantity</label>
              <Field
                className={classes.input}
                name="quantity"
                variant="outlined"
                as={TextField}
              />
              <ErrorMessage component={TextError} name="quantity" />
              {/* <label>Likes</label>
            <Field
              className={classes.input}
              name="likes"
              variant="outlined"
              as={TextField}
            />
            <ErrorMessage component={TextError} name="likes" /> */}
              {/* <input
              type="file"
              name="images"
              onChange={(e) => {
                setImage(e.target.files);
              }}
            /> */}
              {/* <DropzoneDialog /> */}
              {/* <ImageDropzone
                buttonText={"Загрузить"}
                setFieldValue={setFieldValue}
                name="images"
                formikImages={values.images}
              /> */}
              {/* <Field as="select" name="genre"></Field> */}

              <Button type="submit" color="primary" variant="contained">
                Изменить
              </Button>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
}
