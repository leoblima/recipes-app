export const fetchFoodApiByFilter = async (filter, word) => {
  switch (filter) {
  case 'ingredient':
    return `https://www.themealdb.com/api/json/v1/1/filter.php?i=${word}`;
  case 'name':
    return `https://www.themealdb.com/api/json/v1/1/search.php?s=${word}`;
  case 'firstletter':
    return `https://www.themealdb.com/api/json/v1/1/search.php?f=${word}`;
  default:
    return null;
  }
};

export const fetchDrinkApiByFilter = async (filter, word) => {
  switch (filter) {
  case 'ingredient':
    return `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${word}`;
  case 'name':
    return `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${word}`;
  case 'firstletter':
    return `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${word}`;
  default:
    return null;
  }
};
