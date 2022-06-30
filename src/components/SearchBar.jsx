import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { fetchFoodApiByFilter, fetchDrinkApiByFilter } from '../hooks/fetchApi';
import { Context } from '../context/context';
import FilteredFoods from './FilteredFoods';
import FilteredDrinks from './FilteredDrinks';
import './SearchBar.css';

const SearchBar = ({ currentPage }) => {
  const [searchValue, setSearchValue] = useState('');
  const [radioSelected, setRadioSelected] = useState('');
  const [actualPage] = useState(currentPage);

  const history = useHistory();

  const {
    filteredFoods,
    setFilteredFoods,
    filteredDrinks,
    setFilteredDrinks } = useContext(Context);

  useEffect(() => {
    if (filteredFoods.length === 1) {
      history.push(`/foods/${filteredFoods[0].idMeal}`);
    }

    if (filteredFoods[0] === 'erro') {
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
    }
  }, [filteredFoods]);

  useEffect(() => {
    if (filteredDrinks.length === 1) {
      history.push(`/drinks/${filteredDrinks[0].idDrink}`);
    }

    if (filteredDrinks[0] === 'erro') {
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
    }
  }, [filteredDrinks]);

  const handleSearch = async () => {
    if (radioSelected === 'firstletter' && searchValue.length > 1) {
      global.alert('Your search must have only 1 (one) character');
    }

    if (currentPage === '/foods') {
      const urlToFetch = await fetchFoodApiByFilter(radioSelected, searchValue);
      const fetched = await fetch(urlToFetch);
      const data = await fetched.json();
      setFilteredFoods(data.meals || ['erro']);
    } else {
      const urlToFetch = await fetchDrinkApiByFilter(radioSelected, searchValue);
      const fetched = await fetch(urlToFetch);
      const data = await fetched.json();
      setFilteredDrinks(data.drinks || ['erro']);
    }
  };

  return (
    <div className="container d-flex flex-column align-items-center">
      <div className="form-group">
        <input
          type="text"
          value={ searchValue }
          data-testid="search-input"
          onChange={ (e) => setSearchValue(e.target.value) }
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="ingredient">
          <span className="radial-text">Ingredient</span>
          <input
            type="radio"
            name="radio-search"
            id="ingredient"
            data-testid="ingredient-search-radio"
            value="ingredient"
            onChange={ (e) => setRadioSelected(e.target.value) }
            className="form-control"
          />
        </label>
        <label htmlFor="name">
          <span className="radial-text"> Name </span>
          <input
            type="radio"
            name="radio-search"
            id="name"
            data-testid="name-search-radio"
            value="name"
            onChange={ (e) => setRadioSelected(e.target.value) }
            className="form-control"
          />
        </label>
        <label htmlFor="firstletter">
          <span className="radial-text">First Letter </span>
          <input
            type="radio"
            name="radio-search"
            id="firstletter"
            data-testid="first-letter-search-radio"
            value="firstletter"
            onChange={ (e) => setRadioSelected(e.target.value) }
            className="form-control"
          />
        </label>
      </div>
      <div>
        <button
          type="button"
          data-testid="exec-search-btn"
          onClick={ handleSearch }
          className="btn btn-dark"
        >
          Search
        </button>
      </div>

      { actualPage === '/foods' && filteredFoods.length > 1
        && <FilteredFoods filteredItems={ filteredFoods } />}

      { actualPage === '/drinks' && filteredDrinks.length > 1
              && <FilteredDrinks filteredItems={ filteredDrinks } /> }
    </div>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  currentPage: PropTypes.string.isRequired,
};
