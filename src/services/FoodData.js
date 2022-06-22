const foodData = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const foodDataCategory = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';

export const getFoodRecipes = async () => {
  const result = await fetch(foodData).then((response) => response.json());
  return result.meals;
};

export const getFoodCategories = async () => {
  const result = await fetch(foodDataCategory).then((response) => response.json());
  return result.meals;
};

export const getFoodByCategories = async (category) => {
  const foodDataByCategory = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
  const result = await fetch(foodDataByCategory).then((response) => response.json());
  return result.meals;
};
