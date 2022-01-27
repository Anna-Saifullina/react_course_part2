import React from "react";
import style from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={style["wrapper-example"]}>
      <div>
        <p>Учебная работа ННГУ. Курс React_2021</p>
      </div>
      <h1>FPK_NNGU</h1>
    </footer>
  );
};

export default Footer;
