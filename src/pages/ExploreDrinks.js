import React from 'react';
import BottomMenu from '../components/BottomMenu';
import ExploreDrinksOrMeals from '../components/ExploreDrinksOrMeals';
import Header from '../components/Header';

const ExploreDrinks = () => (
  <div>
    <Header />
    <ExploreDrinksOrMeals type="drinks" />
    <BottomMenu />
  </div>

);

export default ExploreDrinks;
