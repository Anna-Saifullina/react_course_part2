import { Dispatch } from "react";
import { PostsDataType } from "../../assets/data";
import makeRequest from "../../network";
import { FetchOnePostActionType, FetchPostsDataActionType } from "./types";

export enum PostsActionsType {
  fetchPostsData = "FETCH_POST_DATA",
  fetchOnePost = "FETCH_ONE_POST",
}

// export const fetchPostsDataAction = (data: PostsDataType) => {
//   return {
//     type: PostsActionsType.fetchPostsData,
//     payload: data,
//   };
// };

export const fetchPostsDataAction = () => {
  return async (dispatch: Dispatch<FetchPostsDataActionType>) => {
    const data = await makeRequest({ url: "posts" });
    dispatch({
      type: PostsActionsType.fetchPostsData,
      payload: data,
    });
  };
};

export const fetchOnePostAction = (id: string) => {
  return async (dispatch: Dispatch<FetchOnePostActionType>) => {
    const data = await makeRequest({ url: `posts/${id}` });
    dispatch({
      type: PostsActionsType.fetchOnePost,
      payload: data,
    });
  };
};
