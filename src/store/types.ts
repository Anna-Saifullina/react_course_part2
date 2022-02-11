import { ReducerType as PostReducerType } from "./Posts/types";
import { ReducerType as UsersReducerType } from "./Users/types";

export type RootReducerType = {
  posts: PostReducerType;
  users: UsersReducerType;
};
