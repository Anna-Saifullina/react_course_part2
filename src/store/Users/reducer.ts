import { UsersActionsType } from "./actions";
import { ActionsType, ReducerType } from "./types";

const initialState: ReducerType = {
  user: { lastName: "", firstName: "" },
};

const reducer = (state = initialState, action: ActionsType): ReducerType => {
  switch (action.type) {
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
