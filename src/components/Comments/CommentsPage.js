import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { movieContext } from "../../contexts/MovieContext";

function CommentsPage(props) {
  const { fetchComments, comments } = useContext(movieContext);
  useEffect(() => {
    fetchComments();
  }, []);
  const history = useHistory();
  return (
    <div>
      <h3
        onClick={() => {
          history.push("movie/comments/create");
        }}
      >
        Create Comment
      </h3>
      {comments.map((comment) => (
        <>
          <h3>{comment.owner}</h3>
          <p>{comment.body}</p>
        </>
      ))}
    </div>
  );
}

export default CommentsPage;
