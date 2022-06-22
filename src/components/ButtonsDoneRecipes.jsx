import { React } from 'react';
import PropTypes from 'prop-types';

const ButtonsDoneRecipes = ({ setCategory }) => {
  const handleClick = ({ target: { value } }) => {
    setCategory(value);
  };
  return (
    <div>
      <button
        type="button"
        data-testid="filter-by-all-btn"
        value="All"
        onClick={ (e) => handleClick(e) }
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
        value="food"
        onClick={ (e) => handleClick(e) }
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        value="drink"
        onClick={ (e) => handleClick(e) }
      >
        Drinks
      </button>
    </div>
  );
};

ButtonsDoneRecipes.propTypes = {
  setCategory: PropTypes.func.isRequired,
};

export default ButtonsDoneRecipes;
