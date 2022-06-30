import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  getFoodRecipes,
  getFoodCategories,
  getFoodByCategories } from '../services/FoodData';
import {
  getDrinkRecipes,
  getDrinkCategories,
  getDrinkByCategories } from '../services/DrinkData';
import {
  getNationalitiesData,
  getFoodsByNationData,
} from '../services/NationalitiesData';
import getIngredients from '../services/IngredientsData';

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [filteredDrinks, setFilteredDrinks] = useState([]);
  const [foodsData, setFoodsData] = useState([]);
  const [foodCategories, setFoodCategories] = useState([]);
  const [drinksData, setDrinksData] = useState([]);
  const [drinkCategories, setDrinkCategories] = useState([]);
  const [filterByCategory, setFilterByCategory] = useState(null);
  const [usedFilter, setUsedFilter] = useState('');
  const [nationalitiesData, setNationalitiesData] = useState(['All']);
  const [selectedNationality, setSelectedNationality] = useState('All');
  const [foodsByNationData, setFoodsByNationData] = useState([]);
  const [mealsIngredientsData, setMealsIngredientsData] = useState([]);
  const [drinksIngredientsData, setDrinksIngredientsData] = useState([]);
  const [selectedIngredient, setSelectedIngredient] = useState([]);
  const [recipeInProgress, setRecipeInProgress] = useState(false);

  const getIngredientsData = async () => {
    const mealsIngredients = await getIngredients('meal');
    const drinksIngredients = await getIngredients('cocktail');
    setMealsIngredientsData(mealsIngredients);
    setDrinksIngredientsData(drinksIngredients);
  };
  const [foodDetail, setFoodDetail] = useState([]);
  const [drinkDetail, setDrinkDetail] = useState([]);

  const getNationalities = async () => {
    const nationalities = await getNationalitiesData();
    setNationalitiesData([...nationalitiesData, ...nationalities]);
  };

  const getFoodsByNation = async () => {
    const foodsByNation = await getFoodsByNationData(selectedNationality);
    setFoodsByNationData(foodsByNation);
  };

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

  const getByCategories = async (category, type) => {
    if (type === 'Meal') {
      const foods = await getFoodByCategories(category);
      setFilterByCategory(foods);
    }
    if (type === 'Drink') {
      const drinks = await getDrinkByCategories(category);
      setFilterByCategory(drinks);
    }
  };

  useEffect(() => {
    getData();
    getCategories();
    getNationalities();
    getIngredientsData();
  }, []);

  useEffect(() => {
    if (selectedNationality !== 'All') {
      getFoodsByNation();
    }
  }, [selectedNationality]);

  const initialState = {
    email,
    setEmail,
    password,
    setPassword,
    filteredFoods,
    setFilteredFoods,
    filteredDrinks,
    setFilteredDrinks,
    foodsData,
    foodCategories,
    drinksData,
    drinkCategories,
    getByCategories,
    filterByCategory,
    setFilterByCategory,
    usedFilter,
    setUsedFilter,
    nationalitiesData,
    selectedNationality,
    setSelectedNationality,
    foodsByNationData,
    mealsIngredientsData,
    drinksIngredientsData,
    selectedIngredient,
    setSelectedIngredient,
    foodDetail,
    setFoodDetail,
    drinkDetail,
    setDrinkDetail,
    recipeInProgress,
    setRecipeInProgress,
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
