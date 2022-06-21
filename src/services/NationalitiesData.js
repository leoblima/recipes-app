const NATIONALITIES_URL = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';

export const getNationalitiesData = async () => {
 try {
   const apiResponse = await fetch(NATIONALITIES_URL);
   if (apiResponse) {
     const response = await apiResponse.json();
     const areas = response.meals.map((area) => area.strArea);
     setNationalities([...nationalities, ...areas]);
   }
 } catch (error) {
   console.log(error);
 }
}