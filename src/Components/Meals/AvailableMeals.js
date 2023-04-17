import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Chilli Burger With Pepper Relish",
    description: "Chilli lamb pattie, roasted bell pepper dip",
    price: 1.58,
  },
  {
    id: "m2",
    name: "Perfect Lamb Satay Burger",
    description: "Creaminess of peanut butter smothered with a gorgeous satay sauce",
    price: 1.83,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 2.44,
  },
  {
    id: "m4",
    name: " Stuffed Bean Burger",
    description: "Bean burger with chipotle chilli and a dash of lime.",
    price: 1.46,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map(meal => <MealItem key={meal.id} name={meal.name} 
    description={meal.description} price={meal.price}
  />);
    
  
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
        </Card>
    
    </section>
  );
};

export default AvailableMeals;