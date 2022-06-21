import React from 'react';
import { useEffect, useState } from 'react';
import BottomMenu from '../components/BottomMenu';
import Header from '../components/Header';

const NATIONALITIES_URL =
  'https://www.themealdb.com/api/json/v1/1/list.php?a=list';

const ExploreByNationalities = () => {
  const [nationalities, setNationalities] = useState([]);

  useEffect(() => {
    const getNationalities = async () => {
      try {
        const apiResponse = await fetch(NATIONALITIES_URL);
        if (apiResponse) {
          const response = await apiResponse.json();
          const areas = response.meals.map((area) => area.strArea);
          setNationalities(areas);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getNationalities();
  }, []);

  return (
    <div>
      <Header />
      <div>
        <select name='' id=''>
          {nationalities.map((nationality) => {
            return <option value={nationality}>{nationality}</option>;
          })}
        </select>
      </div>
      <BottomMenu />
    </div>
  );
};

export default ExploreByNationalities;
