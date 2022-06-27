import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Detail from '../components/Details';
import { Context } from '../context/context';
import { fetchDetails } from '../hooks/fetchApi';

const DrinkDetail = () => {
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
  }, []);

  useEffect(() => {
    if (objectEntries.length > 0) {
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
      {console.log(drinkDetail)}

      { currentDrink
      && <Detail
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
    </>
  );
};

export default DrinkDetail;
