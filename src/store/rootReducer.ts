import { combineReducers } from "redux";
import PostReducer from "./Posts/reducer";
import UserReducer from "./Users/reducer";

const rootReducer = combineReducers({
  posts: PostReducer,
  users: UserReducer,
});

export default rootReducer;
