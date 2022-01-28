import React from "react";
import PostsList from "../../components/PostsLists";
import data from "../../assets/data";

const PostsPage: React.FC = () => {
  return <PostsList data={data} />;
};

export default PostsPage;
