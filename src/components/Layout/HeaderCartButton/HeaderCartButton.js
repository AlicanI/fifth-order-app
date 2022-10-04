import React, { useContext, useState, useEffect } from "react";
import { CartIcon, CartContext } from "../../Exporter";
import "./HeaderCartButton.scss";

const HeaderCartButton = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClass = `button ${isClicked ? "bump" : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setIsClicked(true);

    const timer = setTimeout(() => {
      setIsClicked(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClass} onClick={props.onClickHandler}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
