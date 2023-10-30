import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "互惠拍攝",
    description: "一組五張，Win-win方案，你好我也好！",
    price: 0,
  },
  {
    id: "m2",
    name: "個人寫真照",
    description: "全身，一組五張 !",
    price: 3000,
  },
  {
    id: "m3",
    name: "婚紗攝影",
    description: "依主題系列，一組20張！",
    price: 10000,
  },
  {
    id: "m4",
    name: "高山攝影",
    description: "考量攝影師體力，費用較高但效果佳！",
    price: 15000,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      meal={meal}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
