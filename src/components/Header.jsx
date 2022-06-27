import { React, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';
import './Header.css';

function Header() {
  const history = useHistory();
  const [search, setSearch] = useState(false);
  const [searchAvailable, setSearchAvailable] = useState(false);
  const [pageName, setPageName] = useState('');

  const getPageName = ({ location: { pathname } }) => {
    switch (pathname) {
    case '/':
      return 'Login';
    case '/profile':
      return 'Profile';
    case '/foods':
      setSearchAvailable(true);
      return 'Foods';
    case '/drinks':
      setSearchAvailable(true);
      return 'Drinks';
    case '/explore':
      return 'Explore';
    case '/explore/foods':
      return 'Explore Foods';
    case '/explore/drinks':
      return 'Explore Drinks';
    case '/explore/foods/ingredients':
      return 'Explore Ingredients';
    case '/explore/drinks/ingredients':
      return 'Explore Ingredients';
    case '/explore/foods/nationalities':
      setSearchAvailable(true);
      return 'Explore Nationalities';
    case '/done-recipes':
      return 'Done Recipes';
    case '/favorite-recipes':
      return 'Favorite Recipes';
    default:
      setSearchAvailable(false);
      return 'Not Found';
    }
  };

  const goToProfilePage = (e) => {
    e.preventDefault();
    history.push('/profile');
  };

  const getSearchBar = (e) => {
    e.preventDefault();
    setSearch(!search);
  };

  useEffect(() => {
    setPageName(getPageName(history));
  }, [history]);

  return (
    <div>
      <h3 data-testid="page-title">{ pageName }</h3>
      <button
        type="button"
        onClick={ (e) => goToProfilePage(e) }
      >
        <img src={ profileIcon } alt="profile-icon" data-testid="profile-top-btn" />
      </button>
      {searchAvailable && (
        <button
          type="button"
          onClick={ (e) => getSearchBar(e) }
        >
          <img src={ searchIcon } alt="seacrh-icon" data-testid="search-top-btn" />
        </button>
      )}
      {search && <SearchBar currentPage={ history.location.pathname } />}
    </div>
  );
}

export default Header;
