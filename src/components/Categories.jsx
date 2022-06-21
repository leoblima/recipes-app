import React from 'react';
import PropTypes from 'prop-types';

const Categories = ({ data }) => {
  const maxRange = 5;
  const recipes = data.slice(0, maxRange);

  return (
    <aside>
      {recipes.map((item) => (
        <button
          type="button"
          key={ item.strCategory }
          data-testid={ [`${item.strCategory}-category-filter`] }
        >
          { item.strCategory }
        </button>
      ))}
    </aside>
  );
};

Categories.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
