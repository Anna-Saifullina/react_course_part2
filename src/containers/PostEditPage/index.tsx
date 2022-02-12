import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PostEdit from "../../components/PostEdit";
import makeRequest from "../../network";
import { getOnePostData } from "../../store/Posts/selectors";
import { OnePostType } from "../../store/Posts/types";
import { Context } from "../App/Context";

const PostEditPage: React.FC = () => {
  const { id } = useParams();
  const post = useSelector(getOnePostData);
  const contextData = useContext(Context);
  console.log(contextData);

  const submitHandler = (data: OnePostType) => {
    makeRequest({
      method: "PUT",
      url: `posts/${id}`,
      data,
    });
  };
  return (
    <Context.Provider value="Alex">
      <PostEdit post={post} submitHandler={submitHandler} />;
    </Context.Provider>
  );
};

export default PostEditPage;
