import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import copy from 'clipboard-copy';
import saveLocalStorage from '../services/saveLocalStorage';

const Detail = ({
  image, title, category, instructions, video,
  ingredients, measure, id, nationality, alcoholic,
}) => {
  const history = useHistory();
  const location = useLocation();

  const [copiedUrl, setCopiedUrl] = useState('');

  const handleRedirectToProgress = () => {
    const path = location.pathname.split('/')[1];
    history.push(`/${path}/${id}/in-progress`);
  };

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
          <p
            key={ index }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            { ingredient[1] }
            -
            { measure[index][1]}
          </p>
        ))}
      </div>
      <div>
        <p data-testid="instructions">{ instructions }</p>
      </div>
      <div data-testid="video">
        <iframe
          src={ video }
          title="how to"
        />
      </div>
      <div>
        <p data-testid={ `${'0'}-recomendation-card` }>
          RECEITAS RECOMENDADAS AQUI
        </p>
      </div>
      <div>
        <button
          type="button"
          data-testid="start-recipe-btn"
          className="fixed-bottom"
          onClick={ handleRedirectToProgress }
        >
          Iniciar Receita
        </button>
      </div>
    </div>
  );
};

export default Detail;

Detail.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf.isRequired,
  measure: PropTypes.arrayOf.isRequired,
  id: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
  alcoholic: PropTypes.string.isRequired,
};
