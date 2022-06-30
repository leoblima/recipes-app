import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../context/context';
import { fetchDetails } from '../hooks/fetchApi';
import ProgressDetails from './ProgressDetails';

const DrinkInProgress = () => {
  const [currentDrink, setCurrentDrink] = useState({});
  const [objectEntries, setObjectEntries] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [measure, setMeasure] = useState([]);

  const { setDrinkDetail, drinkDetail } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const drink = await fetchDetails('drinks', params.id);
      setCurrentDrink(drink[0]);
      setDrinkDetail(drink[0]);
    };
    fetchData();
  }, []);

  useEffect(() => {
    setObjectEntries(Object.entries(drinkDetail));
  }, [drinkDetail]);

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
      { currentDrink
      && <ProgressDetails
        id={ params.id }
        image={ currentDrink.strDrinkThumb }
        title={ currentDrink.strDrink }
        category={ currentDrink.strCategory }
        alcoholic={ currentDrink.strAlcoholic }
        instructions={ currentDrink.strInstructions }
        ingredients={ ingredients }
        measure={ measure }
        video={ currentDrink.strVideo }
      /> }
    </div>
  );
};

export default DrinkInProgress;
