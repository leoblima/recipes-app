import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Context } from '../context/context';
import { fetchDrinkApiByFilter, fetchFoodApiByFilter } from '../hooks/fetchApi';

const MEALS_INGREDIENTS_IMG_ENDPOINT = 'https://www.themealdb.com/images/ingredients/';
const DRINKS_INGREDIENTS_IMG_ENDPOINT = 'https://www.thecocktaildb.com/images/ingredients/';
const mealsIngredientsImg = [];
const drinksIngredientsImg = [];

const getIngredientsImg = (ingredientName, type) => {
  if (type === 'MEALS') {
    mealsIngredientsImg
      .push(`${MEALS_INGREDIENTS_IMG_ENDPOINT}${ingredientName}-Small.png`);
    return mealsIngredientsImg;
  }
  drinksIngredientsImg
    .push(`${DRINKS_INGREDIENTS_IMG_ENDPOINT}${ingredientName}-Small.png`);
  return drinksIngredientsImg;
};

export default function IngredientCard() {
  let ingredientImgArr = [];
  const { location: { pathname } } = useHistory();
  const { mealsIngredientsData, drinksIngredientsData,
    setFilteredFoods, setFilteredDrinks } = useContext(Context);

  const searchByIngredientName = async (ingredientName) => {
    if (pathname.includes('foods')) {
      const urlToFetch = await fetchFoodApiByFilter('ingredient', ingredientName);
      const fetched = await fetch(urlToFetch);
      const data = await fetched.json();
      setFilteredFoods(data.meals || ['erro']);
    } else {
      const urlToFetch = await fetchDrinkApiByFilter('ingredient', ingredientName);
      const fetched = await fetch(urlToFetch);
      const data = await fetched.json();
      setFilteredDrinks(data.drinks || ['erro']);
    }
  };

  const handleClick = (ingredientName) => {
    searchByIngredientName(ingredientName);
  };

  const maxRange = 12;
  const mealsIngredients = (mealsIngredientsData).slice(0, maxRange);
  const drinksIngredients = (drinksIngredientsData).slice(0, maxRange);

  return (
    <section className="recipes">
      { pathname.includes('drinks') ? drinksIngredients.map((ingredient, index) => {
        ingredientImgArr = getIngredientsImg(ingredient.strIngredient1, 'DRINKS');
        return (
          <Link to="/drinks" key={ index }>
            <button
              type="button"
              onClick={ handleClick.bind(null, ingredient.strIngredient1) }
            >
              <div className="card-container" data-testid={ `${index}-ingredient-card` }>
                <img
                  data-testid={ `${index}-card-img` }
                  src={ ingredientImgArr[index] }
                  alt={ ingredient.strIngredient1 }
                />
                <div
                  data-testid={ `${index}-card-name` }
                >
                  {ingredient.strIngredient1}
                </div>
              </div>
            </button>
          </Link>
        );
      }) : mealsIngredients.map((ingredient, index) => {
        ingredientImgArr = getIngredientsImg(ingredient.strIngredient, 'MEALS');
        return (
          <Link to="/foods" key={ index }>
            <button
              type="button"
              onClick={ handleClick.bind(null, ingredient.strIngredient) }
            >
              <div className="card-container" data-testid={ `${index}-ingredient-card` }>
                <img
                  data-testid={ `${index}-card-img` }
                  src={ ingredientImgArr[index] }
                  alt={ ingredient.strIngredient }
                />
                <div data-testid={ `${index}-card-name` }>{ingredient.strIngredient}</div>
              </div>
            </button>
          </Link>
        );
      })}
    </section>
  );
}
