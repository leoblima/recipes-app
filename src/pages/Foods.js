import React, { useContext } from 'react';
import { Context } from '../context/context';
import BottomMenu from '../components/BottomMenu';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import './Items.css';

const Foods = () => {
  const { foodsData } = useContext(Context);
  return (
    <div>
      <h2>Foods</h2>
      <Header />
      <RecipeCard data={ foodsData } type="Meal" />
      <BottomMenu />
    </div>

  );
};
export default Foods;
