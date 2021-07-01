import { IconButton, Typography } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { movieContext } from "../../contexts/MovieContext";
import classes from "./movieDetail.module.css";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { useConfirm } from "material-ui-confirm";
import { notifySuccess } from "../../helpers/notifiers";
import Navbar from "../../components/Navbar/Navbar";

export default function MovieDetailPage() {
  const { fetchMovieDetail, movieDetail, deleteMovie, createComment } =
    useContext(movieContext);

  const [comment, setComment] = useState("");
  const { id } = useParams();
  const confirm = useConfirm();
  const history = useHistory();

  useEffect(() => {
    fetchMovieDetail(id);
  }, [id]);
  console.log(movieDetail);

  const handleMovieDelete = () => {
    confirm({
      description: "Удалить данный товар?",
    }).then(() => {
      deleteMovie(id).then(() => {
        notifySuccess("Товар был успешно удален!");
        history.push("/");
      });
    });
  };
  //   console.log(movieDetail.comments);
  const user = JSON.parse(`${localStorage.getItem("user")}`);

  return (
    <>
      <Navbar />
      {movieDetail ? (
        <div className={classes.container}>
          <img
            className={classes.img}
            src={movieDetail.image}
            alt="Of a movie poster"
          />
          {user.email === "admin@admin.com" ? (
            <div>
              <IconButton onClick={handleMovieDelete}>
                <DeleteIcon />
              </IconButton>

              <IconButton onClick={() => history.push(`/movies/${id}/update`)}>
                <EditIcon />
              </IconButton>
            </div>
          ) : null}

          <div className={classes.style_container_typography}>
            <Typography variant="h3">Название: {movieDetail.title}</Typography>
            <Typography variant="h3">Год: {movieDetail.year}</Typography>
            <Typography variant="h3">
              Режиссер: {movieDetail.producer}
            </Typography>
            <Typography variant="h3">
              Возрастное ограничение: {movieDetail.age_limit}
            </Typography>
            <Typography variant="h3">Жанр: {movieDetail.genre}</Typography>
            <Typography variant="h3">Страна: {movieDetail.country}</Typography>
            <Typography variant="h3">
              Длительность: {movieDetail.duration}
            </Typography>
            <Typography variant="h3">
              Рейтинг:{" "}
              {movieDetail.rating % 1 === 0
                ? movieDetail.rating
                : movieDetail.rating.toFixed(1)}
            </Typography>
            <Typography variant="h3">
              Описание: {movieDetail.descriptions}
            </Typography>
            <Typography variant="h3">
              Цена за билет: {movieDetail.price} руб.
            </Typography>
          </div>
          <div className={classes.comments}>
            <h3>отзывы</h3>
            <form
              onSubmit={(e) => {
                // e.preventDefault();
                createComment(comment, id).then("cool!");
              }}
            >
              <input
                type="text"
                placeholder="create new comment"
                onChange={(e) => {
                  setComment(e.target.value);
                }}
              />
              <button type="submit">Create</button>
            </form>
            <div className={classes.commentItem}>
              {movieDetail.comments.map((comment) => (
                <>
                  <Typography variant="h6" style={{ fontWeight: "bold" }}>
                    автор: {comment.owner}
                  </Typography>
                  <Typography variant="p" style={{ fontWeight: "600" }}>
                    {comment.body}
                  </Typography>
                </>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
