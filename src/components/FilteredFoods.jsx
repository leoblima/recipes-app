import React, { useState } from 'react';
import PropTypes from 'prop-types';

const maxLength = 12;

const FilteredFoods = ({ filteredItems }) => {
  const [filteredLength] = useState(filteredItems.slice(0, maxLength));
  // const [twelveFoods, setTwelveFoods] = useState([]);

  // useEffect(() => {
  //   console.log(filteredItems);
  // }, []);
  return (
    <div className=" d-flex flex-column text-center">
      { filteredLength.map((currentItem, index) => (
        <div
          key={ index }
          data-testid={ `${index}-recipe-card` }
        >
          <div data-testid={ `${index}-card-name` }>
            <p>{ currentItem.strMeal }</p>
          </div>
          <div style={ { width: '70%', height: 'auto', margin: 'auto' } }>
            <img
              src={ currentItem.strMealThumb }
              alt={ currentItem.strMeal }
              data-testid={ `${index}-card-img` }
              className="img-thumbnail"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilteredFoods;

FilteredFoods.propTypes = {
  filteredItems: PropTypes.arrayOf.isRequired,
};
