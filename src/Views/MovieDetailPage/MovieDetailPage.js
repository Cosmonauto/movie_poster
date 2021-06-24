import { IconButton, Typography } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { movieContext } from "../../contexts/MovieContext";
import Navbar from "../../components/Navbar/Navbar";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { useConfirm } from "material-ui-confirm";
import { notifySuccess } from "../../helpers/notifiers";

export default function ProductDetailPage() {

    const { fetchMovieDetail, movieDetail, deleteMovie } =
        useContext(movieContext);

    const { id } = useParams();
    const confirm = useConfirm();
    const history = useHistory();

    useEffect(() => {
        fetchMovieDetail(id);
    }, [id]);

    const handleProductDelete = () => {
        confirm({
            description: 'Удалить данный товар?',
        }).then(() => {
            deleteMovie(id).then(() => {
                notifySuccess('Товар был успешно удален!');
                history.push('/');
            });
        });
    };

    return (
        <div>
            <Navbar />
            {movieDetail && (

                <div>
                    <IconButton onClick={handleProductDelete}>
                        <DeleteIcon />
                    </IconButton>

                    <IconButton onClick={() => history.push(`/products/${id}/update`)}>
                        <EditIcon />
                    </IconButton>


                    <Typography variant="h3">{movieDetail.title}</Typography>
                    <Typography variant="h3">{movieDetail.price}$</Typography>
                    <Typography variant="body1">{movieDetail.description}</Typography>
                </div>
            )}
        </div>
    )
};