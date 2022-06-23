import React from 'react';
import BottomMenu from '../components/BottomMenu';
import Header from '../components/Header';
import IngredientCard from '../components/IngredientCard';

function ExploreByIngredients() {
  return (
    <div>
      <Header />
      <IngredientCard />
      <BottomMenu />
    </div>
  );
}

export default ExploreByIngredients;
