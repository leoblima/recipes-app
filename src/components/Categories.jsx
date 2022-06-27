import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../context/context';
import './Categories.css';

const Categories = ({ data, type }) => {
  const {
    getByCategories,
    // filterByCategory,
    setFilterByCategory,
    usedFilter,
    setUsedFilter,
  } = useContext(Context);

  const maxRange = 5;
  const recipes = data.slice(0, maxRange);

  const removeFilters = () => {
    setFilterByCategory(null);
    setUsedFilter('');
  };

  const filterBtn = (category) => {
    setUsedFilter(category);
    if (usedFilter === category) {
      setUsedFilter('');
      return setFilterByCategory(null);
    }
    getByCategories(category, type);
  };

  return (
    <nav>
      {recipes.map((item) => (
        <button
          type="button"
          key={ item.strCategory }
          data-testid={ [`${item.strCategory}-category-filter`] }
          onClick={ () => filterBtn(item.strCategory) }
          className="nav-button btn-primary"
        >
          { item.strCategory }
        </button>
      ))}
      <button
        type="button"
        onClick={ removeFilters }
        data-testid="All-category-filter"
        className="nav-button btn-primary"
      >
        All
      </button>
    </nav>
  );
};

Categories.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default Categories;
