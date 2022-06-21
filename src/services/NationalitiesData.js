const NATIONALITIES_URL = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';

export const getNationalitiesData = async () => {
  try {
    const apiResponse = await fetch(NATIONALITIES_URL);
    if (apiResponse) {
      const response = await apiResponse.json();
      return response.meals.map((area) => area.strArea);
    }
  } catch (error) {
    console.log(error);
  }
};

export const getFoodsByNationData = async (nationality) => {
  try {
    const apiResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${nationality}`);
    if (apiResponse) {
      const response = await apiResponse.json();
      return response.meals;
    }
  } catch (error) {
    console.log(error);
  }
};
