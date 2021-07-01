import React, { useContext, useEffect, useState } from "react";
import classes from "./movieCard.module.css";
import star from "../../assets/icons/star.png";
import cart from "../../assets/icons/shopping-cart.png";
import like from "../../assets/icons/heart.png";
import liked from "../../assets/icons/like.png";
import { movieContext } from "../../contexts/MovieContext";
import { useHistory } from "react-router";
import axios from "axios";
import star2 from "../../assets/icons/star2.png";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { notifySuccess } from "../../helpers/notifiers";
import Truncate from "react-truncate";

function MovieCard({ data }) {
  const {
    title,
    year,
    image,
    price,
    descriptions,
    id,
    duration,
    country,
    genre,
    producer,
    rating,
    age_limit,
    // images,
  } = data;

  const history = useHistory();
  const primary = "primary";
  const secondary = "secondary";
  const likes = [];
  const [color, setColor] = useState(false);

  useEffect(() => {
    getOrderHistory();
    getFavorite();
  }, []);
  console.log(id);
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

  // console.log(favorite);
  const changeColor = () => {
    console.log("SENIOR");
    console.log(favorite);
    console.log(color);
    addMovieToFavorite(id);
    notifySuccess(
      "Фильм добавлен в избранное! Зайдите туда, чтобы его посмотреть или удалить"
    );
    favorite.map((movie) => {
      console.log(movie, id);
      if (movie.id === id) {
        setColor(true);
      }
    });
  };

  return (
    <div className={classes.productItem}>
      <div
        onClick={() => history.push(`/movie/${id}`)}
        className={classes.productImg}
      >
        <div
          style={{
            position: "absolute",
            backgroundColor: "green",
            width: "40px",
            height: "30px",
            borderRadius: "2px",
          }}
        >
          <p style={{ margin: "0px 5px", fontWeight: "bold", color: "#fff" }}>
            {age_limit}
          </p>
        </div>

        <img src={image} alt="movieCardImage" />
      </div>
      <div className={classes.productList}>
        <h4>{title}</h4>
        {/* {rating ? (
          <h6>Рейтинг: {rating % 1 === 0 ? rating : rating.toFixed(1)}</h6>
        ) : null} */}
        {rating === 1 || rating > 0 || rating > 1 ? (
          <img src={star2} alt="star" />
        ) : (
          <img
            src={star}
            alt="star"
            onClick={() => {
              giveRating(1, id);
              notifySuccess("Спасибо за вашу оценку!");
              // console.log(rating);
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
              notifySuccess("Спасибо за вашу оценку!");
              // console.log(rating);
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
              notifySuccess("Спасибо за вашу оценку!");
              // console.log(rating);
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
              notifySuccess("Спасибо за вашу оценку!");
              // console.log(rating);
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
              notifySuccess("Спасибо за вашу оценку!");
              // console.log(rating);
            }}
          />
        )}
        <p style={{ marginTop: "12px" }}>
          {genre}, {year}
        </p>
        {/* <span className={classes.price}>{price} руб</span> */}
        {/* <div className={classes.description}>
          <Truncate
            lines={3}
            ellipsis={"..."}
            style={{ fontWeight: "bold", color: "#005a8d", fontSize: "14px" }}
          >
            {descriptions}
          </Truncate>
        </div> */}
        <div className={classes.favorite}>
          <FavoriteIcon
            onClick={changeColor}
            color={color === true ? "secondary" : "primary"}
          />{" "}
          <p style={{ marginLeft: "7px" }}>В избранное</p>
        </div>
        <p
          onClick={() => {
            history.push(`/movie/comments/${id}`);
          }}
        >
          отзывы
        </p>
      </div>
    </div>
  );
}

export default MovieCard;
