import { PostsDataType } from "../assets/data";

/* eslint-disable no-unused-vars */
export enum PostsActionsType {
  fetchPostsData = "FETCH_POST_DATA",
}

export const fetchPostsDataAction = (data: PostsDataType) => {
  return {
    type: PostsActionsType.fetchPostsData,
    payload: data,
  };
};
