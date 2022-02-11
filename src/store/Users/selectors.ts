import { RootReducerType } from "../types";

export const getUserData = (state: RootReducerType) => state.users.user;
