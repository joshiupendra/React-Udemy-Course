import { getMeals } from '../http.js';
import MealItem from './MealItem.jsx';
import useHttp from '../hooks/ussHttp.js';
import Error from './Error.jsx';

export default function Meals() {
  const { data: loadedMeals, isLoading, error } = useHttp(getMeals, []);

  if (isLoading) {
    return <p>Fetching meals...</p>
  }

  if (error) {
    return <Error title="Failed to fetch meals" message={error} />
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => {
        return (<MealItem key={meal.id} meal={meal} />);
      })}
    </ul>
  );
}