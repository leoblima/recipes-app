import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Detail = ({
  image, title, category, instructions, video, ingredients, measure,
}) => {
  useEffect(() => {

  }, []);

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
        </p>
      </div>
      <div>
        <button type="button" data-testid="share-btn">Compartilhar</button>
        <button type="button" data-testid="favorite-btn">Favoritar</button>
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
        <button type="button" data-testid="start-recipe-btn">Iniciar Receita</button>
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
};
