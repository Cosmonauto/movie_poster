import React, { useContext, useState } from "react";
import { movieContext } from "../../contexts/MovieContext";

function CommentsCreate(props) {
  const { createComment } = useContext(movieContext);
  const [comment, setComment] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createComment(comment);
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
  );
}

export default CommentsCreate;
