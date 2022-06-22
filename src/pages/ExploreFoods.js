import React from 'react';
import BottomMenu from '../components/BottomMenu';
import ExploreDrinksOrMeals from '../components/ExploreDrinksOrMeals';
import Header from '../components/Header';

const ExploreFoods = () => (
  <div>
    <Header />
    <ExploreDrinksOrMeals type="foods" />
    <BottomMenu />
  </div>

);

export default ExploreFoods;
