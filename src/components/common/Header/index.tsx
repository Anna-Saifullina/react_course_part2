import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { userLogoutAction } from "../../../store/Users/actions";
import { getUserData } from "../../../store/Users/selectors";
import style from "./Header.module.scss";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const userData = useSelector(getUserData);
  const logoutHandler = () => {
    dispatch(userLogoutAction());
  };

  return (
    <header className={style["wrapper-example"]}>
      <NavLink to="/">
        <div className={style.logo}>
          <img src="/logo.png" alt="logo" />
        </div>
      </NavLink>
      <nav>
        <ul className={style.menu_list}>
          <li>
            <NavLink to="/">Main</NavLink>
          </li>
          <li>
            <NavLink to="/posts">Posts</NavLink>
          </li>
          <li>
            <NavLink to="/registration">Registration</NavLink>
          </li>
        </ul>
      </nav>
      {userData.firstName && userData.lastName ? (
        <div>
          <p>{userData.firstName}</p>
          <p>{userData.lastName}</p>
          <button type="button" onClick={logoutHandler}>
            <span>logout</span>
          </button>
        </div>
      ) : (
        <Link to="/registration">
          <button type="button" className={style.btn}>
            <span>SIGN UP</span>
          </button>
        </Link>
      )}
    </header>
  );
};
export default Header;
