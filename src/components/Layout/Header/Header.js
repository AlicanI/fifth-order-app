import React, { Fragment } from "react";
import { HeaderCartButton } from "../../Exporter";
import imgPath from "../../../assets/meals.jpg";
import "./Header.scss";

const Header = (props) => {
  return (
    <Fragment>
      <header className="header">
        <h1>ReachMeals</h1>
        <HeaderCartButton onClickHandler={props.onShownHandler} />
      </header>
      <div className="main-image">
        <img src={imgPath} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
