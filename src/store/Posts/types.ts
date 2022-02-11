import { PostsDataType } from "../../assets/data";
import { PostsActionsType } from "./actions";

export type ReducerType = {
  posts: OnePostType[];
  onePost: OnePostType;
};

export type OnePostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type FetchPostsDataActionType = {
  type: PostsActionsType.fetchPostsData;
  payload: OnePostType[];
};

export type FetchOnePostActionType = {
  type: PostsActionsType.fetchOnePost;
  payload: OnePostType;
};

export type ActionsType = FetchPostsDataActionType | FetchOnePostActionType;
