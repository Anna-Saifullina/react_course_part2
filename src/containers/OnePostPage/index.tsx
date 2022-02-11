import React, { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import OnePost from "../../components/OnePost";
import { getOnePostData, getPostsData } from "../../store/Posts/selectors";
import { fetchOnePostAction } from "../../store/Posts/actions";

const OnePostPage: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector(getOnePostData);

  useEffect(() => {
    dispatch(fetchOnePostAction(id!));
  }, []);

  return <OnePost post={post} />;
};

export default OnePostPage;
