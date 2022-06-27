import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import copy from 'clipboard-copy';
import saveLocalStorage from '../services/saveLocalStorage';

const ProgressDetails = ({
  image, title, category, instructions,
  ingredients, measure, id, nationality, alcoholic,
}) => {
  const { location: { pathname } } = useHistory();

  const [copiedUrl, setCopiedUrl] = useState('');
  let [checkedIngredient] = useState([]);

  const copyUrlToShare = () => {
    copy(`http://localhost:3000${pathname.replace('/in-progress', '')}`);
    setCopiedUrl('Link copied!');
  };

  const handleLocalStorage = () => {
    const currentPage = pathname.split('/')[1];
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

  const handleCheck = (target) => {
    if (checkedIngredient.length) {
      const stepDone = checkedIngredient.some((ingredient) => ingredient === target);
      if (stepDone) {
        checkedIngredient = checkedIngredient
          .filter((ingredient) => ingredient !== target);
      } checkedIngredient.push(target);
    } else checkedIngredient.push(target);
    console.log(checkedIngredient);
  };

  const checkStepsDoneList = (target) => {
    console.log(checkedIngredient);
    return checkedIngredient
      .some((ingredient) => ingredient === target);
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
          <label key={ index } htmlFor="steps-checkbox">
            <div
              data-testid={ `${index}-ingredient-step` }
              onClick={
                handleCheck.bind(null, `${ingredient[1]} - ${measure[index][1]}`)
              }
              onKeyPress={
                handleCheck.bind(null, `${ingredient[1]} - ${measure[index][1]}`)
              }
              role="checkbox"
              tabIndex={ index }
              aria-checked={
                checkStepsDoneList.bind(null, `${ingredient[1]} - ${measure[index][1]}`)
              }
              value={ `${ingredient[1]} - ${measure[index][1]}` }
            >
              { `${ingredient[1]} - ${measure[index][1]}` }
              <input
                name="steps-checkbox"
                type="checkbox"
                value={ `${ingredient[1]} - ${measure[index][1]}` }
                aria-checked={
                  checkStepsDoneList.bind(null, `${ingredient[1]} - ${measure[index][1]}`)
                }
                onClick={
                  handleCheck.bind(null, `${ingredient[1]} - ${measure[index][1]}`)
                }
              />
            </div>
          </label>
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
