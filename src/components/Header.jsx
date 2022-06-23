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
      return 'Página inicial de comidas';
    case '/drinks':
      setSearchAvailable(true);
      return 'Página inicial de bebidas';
    case '/explore':
      return 'Explorar';
    case '/explore/foods':
      return 'Explorar comidas';
    case '/explore/drinks':
      return 'Explorar Bebidas';
    case '/explore/foods/ingredients':
      return 'Explorar comidas por ingrediente';
    case '/explore/drinks/ingredients':
      return 'Explorar bebidas por ingrediente';
    case '/explore/foods/nationalities':
      setSearchAvailable(true);
      return 'Explorar comidas por nacionalidade';
    case '/done-recipes':
      return 'Receitas feitas';
    case '/favorite-recipes':
      return 'Receitas favoritas';
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
        data-testid="profile-top-btn"
        onClick={ (e) => goToProfilePage(e) }
      >
        <img src={ profileIcon } alt="profile-icon" />
      </button>
      {searchAvailable && (
        <button
          type="button"
          data-testid="search-top-btn"
          onClick={ (e) => getSearchBar(e) }
        >
          <img src={ searchIcon } alt="seacrh-icon" />
        </button>
      )}
      {search && <SearchBar currentPage={ history.location.pathname } />}
    </div>
  );
}

export default Header;
