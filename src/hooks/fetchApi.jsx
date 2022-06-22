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

export const fetchDetails = async (page, id) => {
  switch (page) {
  case 'foods': {
    const fetched = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await fetched.json();
    return data.meals;
  }
  case 'drinks': {
    const fetched = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await fetched.json();
    return data.drinks;
  }
  default:
    return null;
  }

  // if (page === 'foods') {
  //   const fetched = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  //   const data = await fetched.json();
  //   return data.meals;
  // }

  // const fetched = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
  // const data = await fetched.json();
  // return data;
};
