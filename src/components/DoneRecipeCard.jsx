import { React } from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';

const DoneRecipeCard = ({ recipe, index }) => {
  const { type,
    category,
    name,
    image,
    doneDate,
    tags,
    nationality,
    alcoholicOrNot } = recipe;
  return (
    <section>
      { type === 'food'
        ? <p data-testid={ `${index}-horizontal-top-text` }>
          { ` ${nationality} - ${category}` }
          </p>
        : <p data-testid={ `${index}-horizontal-top-text` }>
          { ` ${alcoholicOrNot}` }
          </p>}
      <img
        src={ image }
        alt={ `${name}-recipe` }
        data-testid={ `${index}-horizontal-image` }
      />
      <p data-testid={ `${index}-horizontal-name` }>{ name }</p>
      <p data-testid={ `${index}-horizontal-done-date` }>{ doneDate }</p>
      <button
        type="button"
      >
        <img
          src={ shareIcon }
          alt="shareIcon.svg"
          data-testid={ `${index}-horizontal-share-btn` }
        />
      </button>
      {
        tags && tags.slice(0, 2).map((tag, position) => (
          <button
            key={ `${tag}-${position}` }
            data-testid={ `${index}-${tag}-horizontal-tag` }
            type="button"
          >
            { tag }
          </button>))

      }
    </section>
  );
};
DoneRecipeCard.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.any).isRequired,
  index: PropTypes.number.isRequired,
};

export default DoneRecipeCard;
