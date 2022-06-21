import { React, useState } from 'react';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header() {
  const history = useHistory();
  const [search, setSearch] = useState(false);
  const [searchAvailable, setSearchAvailable] = useState(false)

  const getPageName = ({ location: { pathname } }) => {
    switch (pathname) {
    case '/':
      setSearchAvailable(false);
      return 'Login';
    case '/profile':
      setSearchAvailable(false);
      return 'Profile';
    case '/foods':
      setSearchAvailable(true);
      return 'Página inicial de comidas';
    case '/drinks':
      setSearchAvailable(false);
      return 'Página inicial de bebidas';
    case '/explore':
      setSearchAvailable(false);
      return 'Explorar';
    case '/explore/foods':
      setSearchAvailable(false);
      return 'Explorar comidas';
    case '/explore/drinks':
      setSearchAvailable(false);
      return 'Explorar Bebidas';
    case '/explore/foods/ingredients':
      setSearchAvailable(false);
      return 'Explorar comidas por ingrediente';
    case '/explore/drinks/ingredients':
      setSearchAvailable(false);
      return 'Explorar bebidas por ingrediente';
    case '/explore/foods/nationalities':
      setSearchAvailable(true);
      return 'Explorar comidas por nacionalidade';
    case '/done-recipes':
      setSearchAvailable(false);
      return 'Receitas feitas';
    case '/favorite-recipes':
      setSearchAvailable(false);
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

  return (
    <div>
      <h3 data-testsid="page-title">{ getPageName(history) }</h3>
      <button
        type="button"
        data-testsid="profile-top-btn"
        onClick={ (e) => goToProfilePage(e) }
      >
        <img
          src={ profileIcon }
          alt="profile-icon"
        />
      </button>
      {searchAvailable && <button
        type="button"
        data-testsid="search-top-btn"
        onClick={ (e) => getSearchBar(e) }
      >
        <img
          src={ searchIcon }
          alt="seacrh-icon"
        />
      </button>}
      {search && <h1>SearchBar</h1>}
    </div>
  );
}

export default Header;
