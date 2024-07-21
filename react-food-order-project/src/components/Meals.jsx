import { useState, useEffect } from 'react';
import { getMeals } from '../http.js';
import MealItem from './MealItem.jsx';

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const meals = await getMeals();
      setLoadedMeals(meals);
    }

    fetchMeals();
  }, []);
  
  return (
    <ul id="meals">
      {loadedMeals.map((meal) => {
        return (<MealItem key={meal.id} meal={meal} />);
      })}
    </ul>
  );
}