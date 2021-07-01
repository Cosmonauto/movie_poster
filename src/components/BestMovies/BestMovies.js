import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import star from '../../assets/icons/star.png'
import liked from '../../assets/icons/like.png';
import classes from "../Favorite/favorite.module.css";
import cart from '../../assets/icons/shopping-cart.png'
import { movieContext } from "../../contexts/MovieContext";
import MoviesPagination from "../MoviesPaginationOriginal";
import Navbar from "../../components/Navbar/Navbar";
function BestMovies(props) {
  const { total, fetchMovies, movies, addMovieToFavorite } = useContext(movieContext);
  const [page, setPage] = useState(1);
  const history = useHistory()
  useEffect(() => {
    fetchMovies(page);
  }, [page]);
  //   console.log(movies[0]);
  return (
    <div style={{ textAlign: "center", color: "white" }}>
      <Navbar />
      <h1>All movies that have a rating of 3 and higher</h1>
      {movies.map((movie) =>
        movie.rating >= 3 ? (
          <div className={classes.productItem}>
            <div
              onClick={() => history.push(`/movie/${movie.id}`)}
              className={classes.productImg}
            >
              <img src={movie.image} alt="movieCardImage" />
            </div>
            <div className={classes.productList}>
              <h2>{movie.title}</h2>
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <span className={classes.price}>{movie.price} руб</span>
              {/* {favorite.movies.map((mov) => mov.item === data) ? ( */}
              <img
                src={liked}
                alt="liked"
                onClick={(e) => {
                  addMovieToFavorite(movie.data);
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
                onClick={() => {

                  // addMovieToOrderHistory(data);
                  // const genreArr = await axios.get("");
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
        ) : null)}

      {/* <h1>Лучшие фильмы</h1>
      {movies.map((movie) =>
        movie.rating >= 3 ? <h1>{movie.title}</h1> : null
      )}
      */}
      {/* <MoviesPagination
        setPage={setPage}
        page={page}
        count={Math.ceil(total / 4)}
      /> */}
    </div>
  );
}

export default BestMovies;
