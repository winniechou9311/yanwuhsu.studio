import React from "react";
import classes from './MealsSummary.module.css'

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>攝影方案</h2>
      <p>
         聯繫拍攝前請詳閱使用公開說明書
      </p>
    </section>
  );
};

export default MealsSummary;
