import { React, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';
import '../pages/Items.css';

const DoneRecipeCard = ({ recipe, index }) => {
  const history = useHistory();
  const [copied, setCopied] = useState(false);
  const IDTESTONE = `${index}-horizontal-top-text`;
  const { type,
    category,
    name,
    image,
    doneDate,
    tags,
    nationality,
    id,
    alcoholicOrNot } = recipe;

  const copyUrl = () => {
    const urlLink = `http://localhost:3000/foods/${id}`;
    navigator.clipboard.writeText(urlLink);
    setCopied(true);
  };
  const handleClick = () => {
    if (type === 'food') {
      history.push(`/foods/${id}`);
    } else {
      history.push(`/drinks/${id}`);
    }
  };

  return (
    <section>
      { type === 'food'
        ? (
          <p data-testid={ IDTESTONE }>
            { `${nationality} - ${category}` }
          </p>
        )
        : (
          <p data-testid={ `${index}-horizontal-top-text` }>
            { ` ${alcoholicOrNot}` }
          </p>
        )}
      <button
        type="button"
        onClick={ () => handleClick() }
        className="recipes-img"
      >
        <input
          type="image"
          src={ image }
          alt={ `${name}-recipe` }
          data-testid={ `${index}-horizontal-image` }
          onClick={ () => handleClick() }
          className="recipes-img"
        />
      </button>
      {/* <img
        src={ image }
        alt={ `${name}-recipe` }
        onClick={ () => handleClick() }
        onKeyDown={ () => console.log() }
        tabIndex={ index }
      /> */}
      <span
        role="button"
        data-testid={ `${index}-horizontal-name` }
        onClick={ () => handleClick() }
        onKeyDown={ () => console.log() }
        tabIndex={ index }
      >
        { name }
      </span>
      <p data-testid={ `${index}-horizontal-done-date` }>{ doneDate }</p>
      <button
        type="button"
        onClick={ () => copyUrl() }
      >
        <img
          src={ shareIcon }
          alt="shareIcon.svg"
          data-testid={ `${index}-horizontal-share-btn` }
        />
      </button>
      {
        copied && <span>Link copied!</span>
      }
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
