import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PostEdit from "../../components/PostEdit";
import makeRequest from "../../network";
import { getOnePostData } from "../../store/Posts/selectors";
import { OnePostType } from "../../store/Posts/types";

const PostEditPage: React.FC = () => {
  const { id } = useParams();
  const post = useSelector(getOnePostData);
  const submitHandler = (data: OnePostType) => {
    makeRequest({
      method: "PUT",
      url: `posts/${id}`,
      data,
    });
  };
  return <PostEdit post={post} submitHandler={submitHandler} />;
};

export default PostEditPage;
