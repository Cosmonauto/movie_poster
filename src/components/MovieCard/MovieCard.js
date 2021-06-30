import React, { useContext, useEffect } from "react";
import classes from "./movieCard.module.css";
import star from "../../assets/icons/star.png";
import cart from "../../assets/icons/shopping-cart.png";
import like from "../../assets/icons/heart.png";
import liked from "../../assets/icons/like.png";
import { movieContext } from "../../contexts/MovieContext";
import { useHistory } from "react-router";
import axios from "axios";
import star2 from "../../assets/icons/star2.png";

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
    rating,
    // images,
  } = data;
  console.log(image);

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
    giveRating,
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
        {/* {useEffect(() => (rating ? <h3>{rating}</h3> : null), [rating])} */}
        {rating ? (
          <h3>{rating % 1 === 0 ? rating : rating.toFixed(1)}</h3>
        ) : null}
        {rating === 1 || rating > 0 || rating > 1 ? (
          <img src={star2} alt="star" />
        ) : (
          <img
            src={star}
            alt="star"
            onClick={() => {
              giveRating(1, id);
              console.log(rating);
            }}
          />
        )}
        {rating === 2 || rating > 1 || rating > 2 ? (
          <img src={star2} alt="star" />
        ) : (
          <img
            src={star}
            alt="star"
            onClick={() => {
              giveRating(2, id);
              console.log(rating);
            }}
          />
        )}
        {rating === 3 || rating > 2 || rating > 3 ? (
          <img src={star2} alt="star" />
        ) : (
          <img
            src={star}
            alt="star"
            onClick={() => {
              giveRating(3, id);
              console.log(rating);
            }}
          />
        )}
        {rating === 4 || rating > 3 || rating > 4 ? (
          <img src={star2} alt="star" />
        ) : (
          <img
            src={star}
            alt="star"
            onClick={() => {
              giveRating(4, id);
              console.log(rating);
            }}
          />
        )}
        {rating === 5 || rating > 4 ? (
          <img src={star2} alt="star" />
        ) : (
          <img
            src={star}
            alt="star"
            onClick={() => {
              giveRating(5, id);
              console.log(rating);
            }}
          />
        )}
        <span className={classes.price}>{price} руб</span>
        {/* {favorite.movies.map((mov) => mov.item === data) ? (
          <img
            src={like}
            alt="like"
            onClick={(e) => {
              addMovieToFavorite(data);
            }}
          />
        ) : (
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
            history.push(`/movie/comments/${id}`);
          }}
        >
          comments
        </h5>
      </div>
    </div>
  );
}

export default MovieCard;
