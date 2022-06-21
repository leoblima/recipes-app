const drinkData = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const categoryDrinkData = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

export const getDrinkRecipes = async () => {
  const result = await fetch(drinkData).then((response) => response.json());
  return result.drinks;
};

export const getDrinkCategories = async () => {
  const result = await fetch(categoryDrinkData).then(((response) => response.json()));
  return result.drinks;
};
