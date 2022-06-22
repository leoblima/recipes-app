import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Detail from '../components/Details';
import { Context } from '../context/context';
import { fetchDetails } from '../hooks/fetchApi';

const FoodDetail = () => {
  const [currentFood, setCurrentFood] = useState({});
  const [objectEntries, setObjectEntries] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [measure, setMeasure] = useState([]);

  const params = useParams();
  const { setFoodDetail, foodDetail } = useContext(Context);

  useEffect(() => {
    const fetchData = async () => {
      const food = await fetchDetails('foods', params.id);
      setCurrentFood(food[0]);
      setFoodDetail(food[0]);
    };
    fetchData();
  }, []);

  useEffect(() => {
    setObjectEntries(Object.entries(foodDetail));
  }, [foodDetail]);

  useEffect(() => {
    if (objectEntries.length > 0) {
      // Pega todos ingredientes
      const allIngredients = objectEntries.filter(
        (item) => item[0].includes('strIngredient')
        && item[1] !== '' && item[1] !== null,
      );
      setIngredients(allIngredients);

      // Pega todas as quantidades de ingredientes
      const allMeasure = objectEntries.filter(
        (item) => item[0].includes('strMeasure')
        && item[1] !== '' && item[1] !== null,
      );
      setMeasure(allMeasure);
    }
  }, [objectEntries]);

  return (
    <>
      {console.log(measure)}

      { currentFood
      && <Detail
        image={ currentFood.strMealThumb }
        title={ currentFood.strMeal }
        category={ currentFood.strCategory }
        instructions={ currentFood.strInstructions }
        ingredients={ ingredients }
        measure={ measure }
        video={ currentFood.strYoutube }
      /> }
    </>
  );
};

export default FoodDetail;
