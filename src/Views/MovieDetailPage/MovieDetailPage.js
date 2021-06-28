import { IconButton, Typography } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { movieContext } from "../../contexts/MovieContext";
import classes from "./movieDetail.module.css";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { useConfirm } from "material-ui-confirm";
import { notifySuccess } from "../../helpers/notifiers";
import Navbar from "../../components/Navbar/Navbar";

export default function MovieDetailPage() {
    const { fetchMovieDetail, movieDetail, deleteMovie } =
        useContext(movieContext);

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

    return (
        <>
            <Navbar />
            {movieDetail ? (
                <div className={classes.container}>
                    <img height="600" src={movieDetail.image} alt="Of a movie poster" />
                    <div>
                        <IconButton onClick={handleMovieDelete}>
                            <DeleteIcon />
                        </IconButton>

                        <IconButton onClick={() => history.push(`/movies/${id}/update`)}>
                            <EditIcon />
                        </IconButton>
                    </div>
                    <div className={classes.style_container_typography}>
                        <Typography variant="h3">Название: {movieDetail.title}</Typography>
                        <Typography variant="h3">Год: {movieDetail.year}</Typography>
                        <Typography variant="h3">
                            Режиссер: {movieDetail.producer}
                        </Typography>
                        <Typography variant="h3">
                            Возрастное ограничение: {movieDetail.ageLimit}
                        </Typography>
                        <Typography variant="h3">Жанр: {movieDetail.genre}</Typography>
                        <Typography variant="h3">Страна: {movieDetail.country}</Typography>
                        <Typography variant="h3">
                            Длительность: {movieDetail.duration}
                        </Typography>
                        <Typography variant="h3">
                            Описание: {movieDetail.description}
                        </Typography>
                        <Typography variant="h3">
                            Цена за билет: {movieDetail.price}$
                        </Typography>
                    </div>
                </div>
            ) : null}
        </>
    );
}
