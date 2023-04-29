import React from "react";
import imageSrc from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton showCatHandler={props.showCatHandler} />
      </header>
      <div className={classes["main-image"]}>
        <img src={imageSrc} alt="meals" />
      </div>
    </>
  );
}

export default Header;
