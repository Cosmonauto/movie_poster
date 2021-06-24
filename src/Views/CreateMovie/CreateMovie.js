import { ErrorMessage, Field, Form, Formik } from "formik";

import React, { useContext } from "react";
import Navbar from "../../components/Navbar/Navbar";
import * as Yup from "yup";
import { Button, TextField, Typography } from "@material-ui/core";
import classes from "./createMovie.module.css";
import TextError from "../../components/TextError/index";
import { movieContext } from "../../contexts/MovieContext";
import { notifySuccess } from "../../helpers/notifiers";
import { useHistory } from "react-router";

export default function ProductCreatePage() {
  const { createMovie } = useContext(movieContext);
  const history = useHistory();

  const initialValues = {
    title: "",
    genre: "",
    duration: null,
    price: null,
    description: "",
    images: "",
    year: null,
    producer: "",
    ageLimit: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Обязательное поле!"),
    genre: Yup.string().required("Обязательное поле!"),
    duration: Yup.number()
      .typeError("Введите число!")
      .required("Обязательное поле!"),
    price: Yup.number()
      .typeError("Введите число!")
      .required("Обязательное поле!"),
    description: Yup.string().required("Обязательное поле!"),
    images: Yup.string().required("Обязательное поле!"),
    year: Yup.number()
      .typeError("Введите число!")
      .required("Обязательное поле!"),
    producer: Yup.string().required("Обязательное поле!"),
    ageLimit: Yup.number()
      .typeError("Введите число!")
      .required("Обязательное поле!"),
  });
  const onSubmit = (values, actions) => {
    console.log("submit");
    createMovie({
      ...values,
      images: [values.images],
    }).then((id) => {
      actions.resetForm();
      notifySuccess("Продукт был создан!");
      history.push(`/movie/${id}`);
    });
  };
  return (
    <div>
      <Navbar />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={console.log("SSSSSS")}
      >
        {({ values }) => (
          <Form className={classes.form}>
            <Typography variant="h4">Add a Movie</Typography>
            <label>Movie Name</label>
            <Field
              className={classes.input}
              name="title"
              variant="outlined"
              as={TextField}
            />

            <ErrorMessage component={TextError} name="title" />

            <label>Genre</label>
            <Field
              className={classes.input}
              name="genre"
              variant="outlined"
              as={TextField}
            />

            <ErrorMessage component={TextError} name="genre" />

            <label>Price</label>
            <Field
              className={classes.input}
              name="price"
              variant="outlined"
              as={TextField}
            />
            <ErrorMessage component={TextError} name="price" />

            <label>Description</label>
            <Field
              variant="outlined"
              className={classes.input}
              rows={8}
              multiline
              name="description"
              as={TextField}
            />
            <ErrorMessage component={TextError} name="description" />

            <label>Image(s)</label>
            <Field
              className={classes.input}
              name="images"
              variant="outlined"
              as={TextField}
            />
            <ErrorMessage component={TextError} name="images" />
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
              name="ageLimit"
              variant="outlined"
              as={TextField}
            />

            <ErrorMessage component={TextError} name="ageLimit" />

            <Button type="submit" color="primary" variant="contained">
              Create
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

// import { ErrorMessage, Field, Form, Formik } from "formik";
// import React, { useContext } from "react";
// // import MainLayout from "../../Layouts/MainLayout";
// import * as Yup from "yup";
// import { Button, FormControl, TextField, Typography } from "@material-ui/core";
// import classes from "./createMovie.module.css";
// import TextError from "../../components/TextError/index";
// import { movieContext } from "../../contexts/MovieContext";
// import { notifySuccess } from "../../helpers/notifiers";
// import { useHistory } from "react-router";

// export default function MovieCreatePage() {
//   const { createMovie } = useContext(movieContext);

//   const history = useHistory();

//   const initialValues = {
//     genre: "",
//     title: "",
//     duration: null,
//     price: null,
//     description: "",
//     images: [],
//     year: null,
//     producer: "",
//     ageLimit: "",
//   };

//   const validationSchema = Yup.object({
//     title: Yup.string().required("Обязательное поле!"),
//     price: Yup.number()
//       .typeError("Введите число!")
//       .required("Обязательное поле!"),
//     description: Yup.string().required("Обязательное поле!"),
//     images: Yup.string().required("Обязательное поле!"),
//     duration: Yup.number()
//       .typeError("Введите число!")
//       .required("Обязательное поле!"),
//     country: Yup.string().required("Обязательное поле!"),
//     producer: Yup.string().required("Обязательное поле!"),
//     genre: Yup.string().required("Обязательное поле!"),
//     year: Yup.number()
//       .typeError("Введите число!")
//       .required("Обязательное поле!"),
//     ageLimit: Yup.string().required("Обязательное поле!"),
//   });

//   const onSubmit = (values, actions) => {
//     createMovie({
//       ...values,
//       images: [values.images],
//     }).then((id) => {
//       actions.resetForm();
//       notifySuccess("Продукт был создан!");
//       history.push(`/home`);
//     });
//   };

//   return (
//     // <MainLayout>
//     <div>
//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={onSubmit}
//       >
//         {({ values }) => (
//           <Form className={classes.form}>
//             <Typography variant="h4">Создание продукта</Typography>
//             <label>Название</label>
//             <Field
//               className={classes.input}
//               name="title"
//               variant="outlined"
//               as={TextField}
//             />

//             <ErrorMessage component={TextError} name="title" />

//             <label>Цена</label>
//             <Field
//               className={classes.input}
//               name="price"
//               variant="outlined"
//               as={TextField}
//             />
//             <ErrorMessage component={TextError} name="price" />

//             <label>Описание</label>
//             <Field
//               variant="outlined"
//               className={classes.input}
//               rows={8}
//               multiline
//               name="description"
//               as={TextField}
//             />
//             <ErrorMessage component={TextError} name="description" />
//             <label>Страна</label>
//             <Field
//               className={classes.input}
//               name="country"
//               variant="outlined"
//               as={TextField}
//             />

//             <ErrorMessage component={TextError} name="country" />
//             <label>Длительность</label>
//             <Field
//               className={classes.input}
//               name="duration"
//               variant="outlined"
//               as={TextField}
//             />

//             <ErrorMessage component={TextError} name="duration" />

//             <label>Изображение</label>
//             <Field
//               className={classes.input}
//               name="images"
//               variant="outlined"
//               as={TextField}
//             />
//             <ErrorMessage component={TextError} name="images" />

//             <label>Producer</label>
//             <Field
//               className={classes.input}
//               name="producer"
//               variant="outlined"
//               as={TextField}
//             />

//             <ErrorMessage component={TextError} name="producer" />

//             <label>Genre</label>
//             <Field
//               className={classes.input}
//               name="genre"
//               variant="outlined"
//               as={TextField}
//             />

//             <ErrorMessage component={TextError} name="genre" />
//             <label>Year</label>
//             <Field
//               className={classes.input}
//               name="year"
//               variant="outlined"
//               as={TextField}
//             />

//             <ErrorMessage component={TextError} name="year" />

//             <label>ageLimit</label>
//             <Field
//               className={classes.input}
//               name="ageLimit"
//               variant="outlined"
//               as={TextField}
//             />

//             <ErrorMessage component={TextError} name="ageLimit" />

//             <Button type="submit" color="primary" variant="contained">
//               Создать
//             </Button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//     // </MainLayout>
//   );
// }
