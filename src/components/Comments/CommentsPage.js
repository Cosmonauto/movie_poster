import React, { useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { movieContext } from "../../contexts/MovieContext";

function CommentsPage(props) {
  const { id } = useParams();
  useEffect(() => {
    fetchMovieDetail(id);
  }, []);
  const { fetchMovieDetail, movieDetail } = useContext(movieContext);

  const history = useHistory();

  console.log(movieDetail);
  return (
    <div>
      {movieDetail
        ? movieDetail.comments.map((comment) => (
            <>
              <h1>{comment.owner}</h1>

              <p>{comment.body}</p>
            </>
          ))
        : null}
      <h3
        onClick={() => {
          history.push(`/movie/comments/create/${id}`);
        }}
      >
        Create Comment
      </h3>
    </div>
  );
}

export default CommentsPage;
