import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import copy from 'clipboard-copy';
import saveLocalStorage from '../services/saveLocalStorage';

const ProgressDetails = ({
  image, title, category, instructions,
  ingredients, measure, id, nationality, alcoholic,
}) => {
  // const history = useHistory();
  ingredients.forEach((ingredient) => console.log(ingredient[1]));

  const location = useLocation();

  const [copiedUrl, setCopiedUrl] = useState('');

  // const handleRedirectToDone = () => {
  //   const path = location.pathname.split('/')[1];
  //   history.push(`/${path}/${id}/in-progress`);
  // };

  const copyUrlToShare = () => {
    copy(`http://localhost:3000${location.pathname}`);
    setCopiedUrl('Link copied!');
  };

  const handleLocalStorage = () => {
    const currentPage = location.pathname.split('/')[1];
    const item = {
      id,
      type: currentPage === 'foods' ? 'food' : 'drink',
      nationality: currentPage === 'foods' ? nationality : '',
      category,
      alcoholicOrNot: currentPage === 'drinks' ? alcoholic : '',
      name: title,
      image,
    };
    saveLocalStorage(item);
  };

  return (
    <div className="container d-flex flex-column text-center">
      <div>
        <img
          className="img-fluid"
          src={ image }
          alt={ title }
          data-testid="recipe-photo"
        />
        <h3 data-testid="recipe-title">{ title }</h3>
        <p data-testid="recipe-category">
          { category }
          { alcoholic }
        </p>
      </div>
      <div>
        <span>{ copiedUrl !== '' ? copiedUrl : '' }</span>
        <button
          type="button"
          data-testid="share-btn"
          className="btn btn-primary mr-3"
          onClick={ copyUrlToShare }
        >
          Compartilhar
        </button>
        <button
          type="button"
          data-testid="favorite-btn"
          className="btn btn-warning"
          onClick={ handleLocalStorage }
        >
          Favoritar
        </button>
      </div>
      <div>
        { ingredients.map((ingredient, index) => (
          <div key={ index }>
            { `${ingredient[1]} - ${measure[index][1]}` }
            <input
              type="checkbox"
              data-testid={ `${index}-ingredient-step` }
              value={ `${ingredient[1]} - ${measure[index][1]}` }
            />
          </div>
        ))}
      </div>
      <div>
        <p data-testid="instructions">{ instructions }</p>
      </div>
      <Link to="/done-recipes">
        <div>
          <button
            type="button"
            data-testid="finish-recipe-btn"
            className="fixed-bottom"
          >
            Finalizar Receita
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ProgressDetails;

ProgressDetails.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf.isRequired,
  measure: PropTypes.arrayOf.isRequired,
  id: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
  alcoholic: PropTypes.string.isRequired,
};
