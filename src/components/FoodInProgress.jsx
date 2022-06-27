import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../context/context';
import { fetchDetails } from '../hooks/fetchApi';
import ProgressDetails from './ProgressDetails';

const FoodInProgress = () => {
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
      const allIngredients = objectEntries.filter(
        (item) => item[0].includes('strIngredient')
        && item[1] !== '' && item[1] !== null,
      );
      setIngredients(allIngredients);

      const allMeasure = objectEntries.filter(
        (item) => item[0].includes('strMeasure')
        && item[1] !== '' && item[1] !== null,
      );
      setMeasure(allMeasure);
    }
  }, [objectEntries]);

  return (
    <div>
      { currentFood
      && <ProgressDetails
        id={ params.id }
        image={ currentFood.strMealThumb }
        title={ currentFood.strMeal }
        category={ currentFood.strCategory }
        instructions={ currentFood.strInstructions }
        ingredients={ ingredients }
        measure={ measure }
        nationality={ foodDetail.strArea }
      /> }
    </div>
  );
};

export default FoodInProgress;
