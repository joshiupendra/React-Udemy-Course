import { BASE_URL } from '../http.js';
import { currencyFormatter } from '../util/formatting.js';
import Button from './UI/Button.jsx';

export default function MealItem({ meal }) {
  return (
    <li className="meal-item">
      <article>
        <img src={`${BASE_URL}/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
}