import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { OnePostType } from "../../store/Posts/types";

type OnePostPropsType = {
  post: OnePostType;
};

const OnePost: React.FC<OnePostPropsType> = (props) => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const {
    post: { title, body },
  } = props;
  return (
    <div>
      <h1>{title}</h1>
      <pre>{body}</pre>
      <button type="button" onClick={goBack}>
        НАЗАД
      </button>
      <br />
      <h2>
        <Link to="edit">EDIT</Link>{" "}
      </h2>
    </div>
  );
};

export default OnePost;
