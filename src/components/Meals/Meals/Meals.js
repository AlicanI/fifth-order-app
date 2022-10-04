import React, { Fragment } from "react";
import { MealsSummary, AvailableMeals } from "../../Exporter";

const Meals = (props) => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
