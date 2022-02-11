import { stat } from "fs";
import { RootReducerType } from "../types";

export const getPostsData = (state: RootReducerType) => state.posts.posts;
export const getOnePostData = (state: RootReducerType) => state.posts.onePost;
