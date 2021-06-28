import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import * as Yup from "yup";
import { Button, TextField, Typography, Input } from "@material-ui/core";
import classes from "./createMovie.module.css";
import TextError from "../../components/TextError/index";
import { movieContext } from "../../contexts/MovieContext";
import { notifySuccess } from "../../helpers/notifiers";
import { useHistory } from "react-router";

import ImageDropzone from "../../components/ImageDropzone";

export default function CreateMovie() {
  const { createMovie } = useContext(movieContext);

  const history = useHistory();

  const initialValues = {
    title: "",
    descriptions: "",

    duration: "",
    price: null,

    year: "",
    producer: "",
    age_limit: "",
    country: "",

    quantity: null,
    // likes: [],
    // genre: "",
    rating: [],
    images: [],

    // title: "1",
    // descriptions: "",
    // price: 1,
    // country: "1",
    // duration: "1",
    // year: "1",
    // producer: "1",
    // age_limit: "1",
    // quantity: 1,
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Обязательное поле!"),
    descriptions: Yup.string().required("Обязательное поле!"),
    genre: Yup.string().required("Обязательное поле!"),
    duration: Yup.number()
      .typeError("Введите число!")
      .required("Обязательное поле!"),
    price: Yup.number()
      .typeError("Введите число!")
      .required("Обязательное поле!"),
    // images: Yup.string().required("Обязательное поле!"),
    year: Yup.number()
      .typeError("Введите число!")
      .required("Обязательное поле!"),
    producer: Yup.string().required("Обязательное поле!"),
    age_limit: Yup.number()
      .typeError("Введите число!")
      .required("Обязательное поле!"),
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

  const onSubmit = (values, actions) => {
    const formData = new FormData();

    // formData.append("title", values.title);
    // formData.append("price", values.price);
    // formData.append("description", values.description);
    formData.append("images", values.images[0]);
    createMovie({
      ...values,
      images: formData,
      // likes: [values.likes],
      // rating: [values.rating],
    }).then(() => {
      actions.resetForm();
      notifySuccess("Продукт был создан!");
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
                Create Movie
              </Typography>
              <label>Movie Name</label>
              <Field
                className={classes.input}
                name="title"
                variant="outlined"
                as={TextField}
              />
              <ErrorMessage component={TextError} name="title" />
              {/* <ErrorMessage component={TextError} name="title" />
            <label>Image</label>
            <Field
              className={classes.input}
              name="images"
              variant="outlined"
              as={FileReader}
            /> */}

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

              {/* <label>Genre</label>
            <Field
              variant="outlined"
              className={classes.input}
              rows={8}
              multiline
              name="genre"
              as={TextField}
            />
            <ErrorMessage component={TextError} name="genre" /> */}

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
              <ImageDropzone
                buttonText={"Загрузить"}
                setFieldValue={setFieldValue}
                name="images"
                formikImages={values.images}
              />

              <Button type="submit" color="primary" variant="contained">
                Create
              </Button>
            </Form>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </>
        )}
      </Formik>
    </div >
  );
}
