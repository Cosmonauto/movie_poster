import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import { movieContext } from "../../contexts/MovieContext";

function CommentsCreate(props) {
  const { createComment } = useContext(movieContext);
  const [comment, setComment] = useState("");
  const { id } = useParams();
  console.log(id);
  return (
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
        style={{ width: "400px", height: "150px" }}
      />
      <button type="submit">Create</button>
    </form>
  );
}

export default CommentsCreate;
