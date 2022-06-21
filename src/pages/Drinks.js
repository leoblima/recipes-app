import React, { useContext } from 'react';
import { Context } from '../context/context';
import BottomMenu from '../components/BottomMenu';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';

const Drinks = () => {
  const { drinksData } = useContext(Context);

  return (
    <div>
      <h2>Drinks</h2>
      <Header />
      <RecipeCard data={ drinksData } type="Drink" />
      <BottomMenu />
    </div>
  );
};
export default Drinks;
