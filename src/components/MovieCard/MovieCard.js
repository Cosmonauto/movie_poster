import React, { useContext, useEffect, useState } from "react";
import classes from "./movieCard.module.css";
import star from "../../assets/icons/star.png";
import cart from "../../assets/icons/shopping-cart.png";
import like from "../../assets/icons/heart.png";
import liked from "../../assets/icons/like.png";
import { movieContext } from "../../contexts/MovieContext";
import { useHistory } from "react-router";
import axios from "axios";
import FavoriteIcon from '@material-ui/icons/Favorite';

function MovieCard({ data }) {
  const {
    title,
    image,
    price,
    description,
    id,
    duration,
    country,
    genre,
    producer,
    // images,
  } = data;
  const [heart, setHeart] = useState('');
  const history = useHistory();

  useEffect(() => {
    getOrderHistory();
    getFavorite();
  }, []);
  const {
    addMovieToOrderHistory,
    orderHistory,
    getOrderHistory,
    changeMovieCount,
    addMovieToFavorite,
    favorite,
    getFavorite,
  } = useContext(movieContext);


  return (
    <div className={classes.productItem}>
      <div
        onClick={() => history.push(`/movie/${id}`)}
        className={classes.productImg}
      >
        <img src={image} alt="movieCardImage" />
      </div>
      <div className={classes.productList}>
        <h2>{title}</h2>
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <span className={classes.price}>{price} руб</span>
        {/* {favorite.movies.map((mov) => mov.item === data) ? ( */}
        <img
          src={like}
          alt="like"
          onClick={(e) => {
            addMovieToFavorite(data);
          }}
        />
        {/* ) : (
          <img
            src={liked}
            alt="liked"
            onClick={(e) => {
              addMovieToFavorite(data);
            }}
          />
        )} */}
        <img
          src={cart}
          alt="cart"
          onClick={async (e) => {
            // addMovieToOrderHistory(data);
            const genreArr = await axios.get("");
          }}
        />
        В корзину
        <h5
          onClick={() => {
            history.push("/movie/comments");
          }}
        >
          comments
        </h5>
      </div>
    </div>
  );
}

export default MovieCard;
