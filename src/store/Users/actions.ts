import { UserType } from "./types";

export enum UsersActionsType {
  userRegistration = "USER_REGISTRATION",
  userLogout = "USER_LOGOUT",
}
export const userRegistrationAction = (user: UserType) => {
  const editUser = {
    lastName: user.lastName.toLocaleLowerCase(),
    firstName: user.firstName.toLocaleLowerCase(),
  };
  return {
    type: UsersActionsType.userRegistration,
    payload: editUser,
  };
};
export const userLogoutAction = () => {
  return {
    type: UsersActionsType.userLogout,
  };
};
