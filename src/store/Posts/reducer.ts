import { PostsActionsType } from "./actions";
import { ActionsType, OnePostType, ReducerType } from "./types";

const initialState: ReducerType = {
  posts: [],
  onePost: {} as OnePostType,
};

const reducer = (state = initialState, action: ActionsType): ReducerType => {
  switch (action.type) {
    case PostsActionsType.fetchPostsData:
      return {
        ...state,
        posts: action.payload,
      };
    case PostsActionsType.fetchOnePost:
      return {
        ...state,
        onePost: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
