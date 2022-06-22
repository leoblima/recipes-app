import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Context } from '../context/context';

function RecipeCard({ data, type }) {
  const { filterByCategory } = useContext(Context);
  const maxRange = 12;
  const recipes = (filterByCategory || data).slice(0, maxRange);
  const maxChar = 14;

  return (
    <section className="recipes">
      { recipes.map((item, index) => (
        <Link
          key={ item[`id${type}`] }
          to={ (
            type === 'Meal'
              ? `/foods/${item[`id${type}`]}` : `/drinks/${item[`id${type}`]}`
          ) }
        >
          <div
            data-testid={ `${index}-recipe-card` }
            className="card-container"
          >
            <h6
              data-testid={ `${index}-card-name` }
            >
              { item[`str${type}`].substring(0, maxChar) }
            </h6>
            <img
              src={ item[`str${type}Thumb`] }
              alt={ item[`str${type}`] }
              data-testid={ `${index}-card-img` }
              className="recipes-img"
            />
          </div>
        </Link>
      ))}
    </section>
  );
}

RecipeCard.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  type: PropTypes.string,
}.isRequired;

export default RecipeCard;
