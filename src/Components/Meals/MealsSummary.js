import React from 'react';
import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
        <h2>Delicious Food, will be delivered to you!!</h2>
        <p>  Choose your favorite burger from our broad selection of available meals
        and enjoy burger time at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
      
    </section>
  )
}

export default MealsSummary
