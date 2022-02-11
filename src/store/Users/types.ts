import { UsersActionsType } from "./actions";

export type ReducerType = {
  user: UserType;
};

export type UserType = {
  lastName: string;
  firstName: string;
};

type UserRegistrationActionType = {
  type: UsersActionsType.userRegistration;
  payload: UserType;
};

type UserLogoutActionType = {
  type: UsersActionsType.userLogout;
};

export type ActionsType = UserRegistrationActionType | UserLogoutActionType;
