const getIngredients = async (type) => {
  const INGREDIENTS_ENDPOINT = `https://www.the${type}db.com/api/json/v1/1/list.php?i=list`;
  const result = await fetch(INGREDIENTS_ENDPOINT).then((response) => response.json());
  if (type === 'meal') return result.meals;
  return result.drinks;
};

export default getIngredients;
