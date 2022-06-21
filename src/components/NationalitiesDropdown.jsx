import { React, useEffect, useState } from 'react';

const NATIONALITIES_URL = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';

const NationalitiesDropdown = () => {
  const [nationalities, setNationalities] = useState(['All']);

  useEffect(() => {
    const getNationalities = async () => {
      try {
        const apiResponse = await fetch(NATIONALITIES_URL);
        if (apiResponse) {
          const response = await apiResponse.json();
          const areas = response.meals.map((area) => area.strArea);
          setNationalities([nationalities, ...areas]);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getNationalities();
  }, [nationalities]);

  return (
    <div>
      <select
        name="nationality-dropdown"
        id="nationality-dropdown"
        data-testid="explore-by-nationality-dropdown"
      >
        {nationalities.map((nationality, index) => (
          <option
            key={ `${nationality}-${index}` }
            value={ nationality }
            data-testid={ `${nationality}-option` }
          >
            { nationality }
          </option>
        ))}
      </select>
    </div>
  );
};

export default NationalitiesDropdown;
