import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const RANDOM_MEAL_URL = 'https://www.themealdb.com/api/json/v1/1/random.php';
const RANDOM_DRINK_URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
function ExploreDrinksOrMeals({ type }) {
  const [randomRecipeId, setRandomRecipeId] = useState('');

  useEffect(() => {
    if (type === 'foods') {
      fetch(RANDOM_MEAL_URL)
        .then((result) => result.json())
        .then((response) => {
          setRandomRecipeId(response.meals[0].idMeal);
        });
    } else {
      fetch(RANDOM_DRINK_URL)
        .then((result) => result.json())
        .then((response) => {
          setRandomRecipeId(response.drinks[0].idDrink);
        });
    }
  });

  return (
    <div>
      <Link to={ `/explore/${type}/ingredients` }>
        <button type="button" data-testid="explore-by-ingredient">By Ingredient</button>
      </Link>
      {type === 'foods' ? (
        <Link to={ `/explore/${type}/nationalities` }>
          <button
            type="button"
            data-testid="explore-by-nationality"
          >
            By Nationality
          </button>
        </Link>) : null }
      <Link to={ `/${type}/${randomRecipeId}` }>
        <button
          type="button"
          data-testid="explore-surprise"
        >
          Surprise me!
        </button>
      </Link>
    </div>
  );
}

export default ExploreDrinksOrMeals;

ExploreDrinksOrMeals.propTypes = {
  type: PropTypes.string.isRequired,
};
