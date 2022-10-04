import React from "react";
import "./CartItem.scss";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className="cart-itemm">
      <div>
        <h2>{props.name}</h2>
        <div className="summaryy">
          <span className="pricee">{price}</span>
          <span className="amountt">x {props.amount}</span>
        </div>
      </div>
      <div className="actionss">
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
