import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Chilli burger With Pepper Relish",
    description: "Chilli lamb pattie, roasted bell pepper dip",
    price: 130.00,
  },
  {
    id: "m2",
    name: "Perfect Lamb Satay Burger",
    description: "crunchiness of cashew nuts and the creaminess of peanut butter smothered with a gorgeous satay sauce",
    price: 150.00,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 200.00,
  },
  {
    id: "m4",
    name: " Stuffed Bean Burger",
    description: "Bean burger with chipotle chilli and a dash of lime.",
    price: 120.00,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map(meal => <li>{meal.name}</li>);
    
  
  return (
    <section className={classes.meals}>
      
        <ul>{mealsList}</ul>
    
    </section>
  );
};

export default AvailableMeals;