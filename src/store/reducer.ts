import { PostsActionsType, UsersActionsType } from "./actions";
import { ActionsType, ReducerType } from "./types";

const initialState: ReducerType = {
  posts: [],
  user: { lastName: "", firstName: "" },
};

const reducer = (state = initialState, action: ActionsType): ReducerType => {
  switch (action.type) {
    case PostsActionsType.fetchPostsData:
      return {
        ...state,
        posts: action.payload,
      };
    case UsersActionsType.userRegistration:
      return {
        ...state,
        user: action.payload,
      };
    case UsersActionsType.userLogout:
      return {
        ...state,
        user: initialState.user,
      };
    default:
      return state;
  }
};

export default reducer;
