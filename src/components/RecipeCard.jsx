import React from 'react';
import PropTypes from 'prop-types';

function RecipeCard({ data, type }) {
  const maxRange = 12;
  const recipes = data.slice(0, maxRange);

  return (
    <section className="recipes">
      { recipes.map((item, index) => (
        <div
          key={ item[`id${type}`] }
          data-testid={ `${index}-recipe-card` }
        >
          <div className="card-container">
            <h4
              data-testid={ `${index}-card-name` }
            >
              { item[`str${type}`] }
            </h4>
            <img
              src={ item[`str${type}Thumb`] }
              alt={ item[`str${type}`] }
              data-testid={ `${index}-card-img` }
              className="recipes-img"
            />
          </div>
        </div>
      ))}
    </section>
  );
}

RecipeCard.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  type: PropTypes.string,
}.isRequired;

export default RecipeCard;
