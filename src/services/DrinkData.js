export const getDrinkRecipes = async () => {
  const drinkData = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const result = await fetch(drinkData).then((response) => response.json());
  return result.drinks;
};

export const getDrinkCategories = async () => {
  const categoryDrinkData = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  const result = await fetch(categoryDrinkData).then(((response) => response.json()));
  return result.drinks;
};

export const getDrinkByCategories = async (category) => {
  const drinkDataByCategory = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`;
  const result = await fetch(drinkDataByCategory).then((response) => response.json());
  return result.drinks;
};
