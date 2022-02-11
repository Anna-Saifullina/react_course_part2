import React from "react";
import { Link } from "react-router-dom";
import { OnePostType } from "../../store/Posts/types";

type PostListPropsType = {
  data: OnePostType[];
};

const PostsList: React.FC<PostListPropsType> = (props) => {
  const { data } = props;
  return (
    <ul>
      {data.map((el) => (
        <li key={el.id}>
          <Link to={`/posts/${el.id}`}>{el.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default PostsList;
