import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Truncate from "react-truncate";
import classesCss from "./movie.module.css";
import { movieContext } from "../../contexts/MovieContext";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { IconButton } from "@material-ui/core";
import { notifySuccess } from "../../helpers/notifiers";
import purple from "@material-ui/core/colors/purple";
import GradeIcon from "@material-ui/icons/Grade";
import { useHistory } from "react-router";
const useStyles = makeStyles({
  root: {
    maxWidth: 500,

    background: "rgb(227,227,241)",
    boxShadow: "0px -1px 12px 5px rgba(0,0,0,0.57)",
    height: "520px",
  },
  media: {
    height: "300px",
  },
  description: {
    height: 250,
    marginTop: 20,
  },
  // cartIconActive: {
  //   color: "primary",
  // },
  // cartIconAnactive: {
  //   color: "secondary",
  // },
});

export default function Movie({ data }) {
  const classes = useStyles();

  const {
    title,
    images,
    price,
    description,
    id,
    duration,
    country,
    genre,
    producer,
  } = data;
  const {
    addProductToCart,
    cart,
    getOrderHistory,
    changeProductCount,
    addProductToFavorite,
    favorite,
    getFavorite,
  } = useContext(movieContext);

  const history = useHistory();
  const [cartState, setCartState] = useState("primary");
  const [favoriteState, setFavoriteState] = useState("primary");

  useEffect(() => {
    getOrderHistory();
    getFavorite();
  }, []);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={images[0]} title={title} />
        <CardContent className={classesCss.font}>
          <Typography
            gutterBottom
            variant="p"
            component="h5"
            className={classesCss.font}
          >
            <Truncate
              lines={2}
              ellipsis={"..."}
              style={{
                fontWeight: "bold",
                color: "#005a8d",
              }}
            >
              {title}
            </Truncate>
          </Typography>
          <Typography variant="p">{price} руб</Typography> <br />
          <Typography variant="p">{country}</Typography> <br />
          <Typography variant="p">{duration}</Typography>
          <br />
          <Typography variant="p">{producer}</Typography>
          <br />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton
          onClick={(e) => {
            addProductToCart(data);
            // setCartState("secondary");
            cart.movies.forEach((product) => {
              product.item.id === id
                ? setCartState("primary")
                : setCartState("secondary");
            });
          }}
          color={cartState}
          id="cartIcon"
        >
          <AddShoppingCartIcon />
        </IconButton>
        <IconButton
          onClick={(e) => {
            addProductToFavorite(data);
            // setCartState("secondary");
            favorite.movies.forEach((product) => {
              product.item.id === id
                ? setFavoriteState("primary")
                : setFavoriteState("secondary");
            });
          }}
          color={favoriteState}
          id="cartIcon"
        >
          <GradeIcon />
        </IconButton>
        <Button
          onClick={() => history.push(`/movies/${id}`)}
          size="small"
          color="primary"
        >
          Подробнее
        </Button>
      </CardActions>
    </Card>
  );
}
