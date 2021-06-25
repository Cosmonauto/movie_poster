import React, { useContext, useEffect } from "react";
import classes from "./movieCard.module.css";
import star from "../../assets/icons/star.png";
import cart from "../../assets/icons/shopping-cart.png";
import like from "../../assets/icons/heart.png";
import { movieContext } from "../../contexts/MovieContext";
import { useHistory } from "react-router";
import axios from "axios";

function MovieCard({ data }) {
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
    addMovieToOrderHistory,
    orderHistory,
    getOrderHistory,
    changeMovieCount,
    addMovieToFavorite,
    favorite,
    getFavorite,
  } = useContext(movieContext);

  const history = useHistory();

  useEffect(() => {
    getOrderHistory();
    getFavorite();
  }, []);
  return (
    <div className={classes.productItem}>
      <div onClick={() => history.push(`/movies/${id}`)} className={classes.productImg}>
        <img src={images[0]} alt="movieCardImage" />
      </div>
      <div className={classes.productList}>
        <h2>{title}</h2>
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <span className={classes.price}>{price} руб</span>
        <img
          src={like}
          alt="like"
          onClick={(e) => {
            addMovieToFavorite(data);
          }}
        />
        <img
          src={cart}
          alt="cart"
          onClick={async (e) => {
            // addMovieToOrderHistory(data);
            const genreArr = await axios.get("");
          }}
        />
        В корзину
      </div>
    </div>
  );
}

export default MovieCard;
