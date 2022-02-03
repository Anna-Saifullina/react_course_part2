import { PostsDataType } from "../assets/data";
import { PostsActionsType } from "./actions";
import { ActionsType, ReducerType } from "./types";

const initialState: ReducerType = {
  posts: [] as PostsDataType,
};

const reducer = (state = initialState, action: ActionsType): ReducerType => {
  switch (action.type) {
    case PostsActionsType.fetchPostsData:
      return state;
    default:
      return state;
  }
};

export default reducer;
