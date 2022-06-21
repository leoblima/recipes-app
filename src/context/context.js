import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getFoodRecipes, getFoodCategories } from '../services/FoodData';
import { getDrinkRecipes, getDrinkCategories } from '../services/DrinkData';

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [foodsData, setFoodsData] = useState([]);
  const [foodCategories, setFoodCategories] = useState([]);
  const [drinksData, setDrinksData] = useState([]);
  const [drinkCategories, setDrinkCategories] = useState([]);

  const getData = async () => {
    const foods = await getFoodRecipes();
    const drinks = await getDrinkRecipes();
    setFoodsData(foods);
    setDrinksData(drinks);
  };

  const getCategories = async () => {
    const foods = await getFoodCategories();
    const drinks = await getDrinkCategories();
    setFoodCategories(foods);
    setDrinkCategories(drinks);
  };

  useEffect(() => {
    getData();
    getCategories();
  }, []);

  const initialState = {
    email,
    setEmail,
    password,
    setPassword,
    foodsData,
    foodCategories,
    drinksData,
    drinkCategories,
  };

  return (
    <Context.Provider value={ initialState }>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
