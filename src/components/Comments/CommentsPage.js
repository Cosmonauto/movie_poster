import React, { useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { movieContext } from "../../contexts/MovieContext";
import CommentsCreate from "./CommentsCreate";
import classes from "./commentsPage.module.css";
import Navbar from "../../components/Navbar/Navbar";
function CommentsPage(props) {
  const { id } = useParams();
  useEffect(() => {
    fetchMovieDetail(id);
  }, []);
  const { fetchMovieDetail, movieDetail } = useContext(movieContext);

  const history = useHistory();

  console.log(movieDetail);
  return (
    <>
      <Navbar />

      <div className={classes.container}>
        <h2>Отзывы к фильму "{movieDetail.title}"</h2>
        <div className={classes.commentDiv}>
          <div style={{ padding: "25px 0" }}>
            <CommentsCreate />
          </div>
          <div className={classes.commentItem}>
            {movieDetail
              ? movieDetail.comments.map((comment) => (
                  <>
                    <h4>автор: {comment.owner}</h4>

                    <h6>{comment.body}</h6>
                  </>
                ))
              : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default CommentsPage;
