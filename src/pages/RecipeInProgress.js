import React from 'react';
import { useHistory } from 'react-router-dom';
import FoodInProgress from '../components/FoodInProgress';
import DrinkInProgress from '../components/DrinkInProgress';

const RecipeInProgress = () => {
  const { location: { pathname } } = useHistory();
  if (pathname.includes('foods')) {
    return <FoodInProgress />;
  }
  return <DrinkInProgress />;
};

export default RecipeInProgress;
