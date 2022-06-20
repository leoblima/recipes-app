import { React, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from '../context/context';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header() {
  const history = useHistory();
  const [search, setSearch] = useState(false);
  const getPageName = ({ location: { pathname } }) => {
    switch (pathname) {
      case '/':
        return 'Home Page';
      case '/profile':
        return 'Profile';
      default:
        break;
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
      <h3 data-testsid='page-title'>{getPageName(history)}</h3>
      <button>
        <img
          src={profileIcon}
          alt='profile-icon'
          data-testsid='profile-top-btn'
          onClick={(e) => goToProfilePage(e)}
        />
      </button>
      <button>
        <img
          src={searchIcon}
          alt='seacrh-icon'
          data-testsid='search-top-btn'
          onClick={(e) => getSearchBar(e)}
        />
      </button>
      {search && <h1>SearchBar</h1>}
    </div>
  );
}

export default Header;
