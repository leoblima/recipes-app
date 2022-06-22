import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const maxLength = 12;

const FilteredDrinks = ({ filteredItems }) => {
  const [filteredLength] = useState(filteredItems.slice(0, maxLength));
  useEffect(() => {

  }, []);

  return (
    <div className=" d-flex flex-column text-center">
      { filteredLength.map((currentItem, index) => (
        <div
          key={ index }
          data-testid={ `${index}-recipe-card` }
        >
          <div data-testid={ `${index}-card-name` }>
            <p>{ currentItem.strDrink }</p>
          </div>
          <div style={ { width: '70%', height: 'auto', margin: 'auto' } }>
            <img
              src={ currentItem.strDrinkThumb }
              alt={ currentItem.strDrink }
              data-testid={ `${index}-card-img` }
              className="img-thumbnail"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilteredDrinks;

FilteredDrinks.propTypes = {
  filteredItems: PropTypes.arrayOf.isRequired,
};