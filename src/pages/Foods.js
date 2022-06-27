import React, { useContext } from 'react';
import { Context } from '../context/context';
import BottomMenu from '../components/BottomMenu';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import Categories from '../components/Categories';
import './Items.css';

const Foods = () => {
  const { foodsData, foodCategories, filteredFoods } = useContext(Context);
  return (
    <div>
      <Header />
      <Categories data={ foodCategories } type="Meal" />
      { filteredFoods.length === 0
        && <RecipeCard data={ foodsData } type="Meal" />}
      <BottomMenu />
    </div>

  );
};
export default Foods;
