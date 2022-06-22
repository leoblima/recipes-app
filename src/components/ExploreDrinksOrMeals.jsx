import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ExploreDrinksOrMeals = ({ type }) => (
  <div>
    <Link to={ `/explore/${type}/ingredients` }>
      <button type="button" data-testid="explore-by-ingredient">By Ingredient</button>
    </Link>
    {type === 'foods' ? (
      <Link to={ `/explore/${type}/nationalities` }>
        <button type="button" data-testid="explore-by-nationality">By Nationality</button>
      </Link>) : null }
    <Link to={ `/explore/${type}` }>
      <button type="button" data-testid="explore-by-surprise">Surprise me!</button>
    </Link>
  </div>
);

export default ExploreDrinksOrMeals;

ExploreDrinksOrMeals.propTypes = {
  type: PropTypes.string.isRequired,
};
