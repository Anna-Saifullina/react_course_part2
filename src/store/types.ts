import { PostsDataType } from "../assets/data";
import { PostsActionsType } from "./actions";

export type ReducerType = {
  posts: PostsDataType;
};

export type FetchPostsDataActionType = {
  type: PostsActionsType.fetchPostsData;
  payload: PostsDataType;
};

export type ActionsType = FetchPostsDataActionType;
