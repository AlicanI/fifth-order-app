import React, { useRef, useState } from "react";
import { Input } from "../../Exporter";
import "./MealItemForm.scss";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const eneteredAmount = amountInputRef.current.value;
    const eneteredAmountNumber = +eneteredAmount;

    if (
      eneteredAmount.trim().length === 0 ||
      eneteredAmountNumber < 1 ||
      eneteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    } else {
      setAmountIsValid(true);
      props.onAddToCart(eneteredAmountNumber);
    }
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: `amount_${props.id}`,
          type: "number",
          min: 0,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Amount is not valid</p>}
    </form>
  );
};

export default MealItemForm;
