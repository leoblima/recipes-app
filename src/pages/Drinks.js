import React, { useContext } from 'react';
import { Context } from '../context/context';
import BottomMenu from '../components/BottomMenu';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import Categories from '../components/Categories';
import './Items.css';

const Drinks = () => {
  const { drinksData, drinkCategories } = useContext(Context);

  return (
    <div>
      <h2>Drinks</h2>
      <Header />
      <Categories data={ drinkCategories } />
      <RecipeCard data={ drinksData } type="Drink" />
      <BottomMenu />
    </div>
  );
};
export default Drinks;