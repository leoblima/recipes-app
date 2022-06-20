import { React, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from '../context/context';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header() {
  const {
    location: { pathname },
  } = useHistory();

  const getPageName = (pathname) => {
    switch (pathname) {
      case '/':
        return 'Home Page';
      case '/profile':
        return 'Profile';
      default:
        break;
    }
  };

  return (
    <div>
      <h3 data-testsid='page-title'>{getPageName(pathname)}</h3>
      <button>
        <img
          src={profileIcon}
          alt='profile-icon'
          data-testsid='profile-top-btn'
        />
      </button>
      <button>
        <img src={searchIcon} alt='seacrh-icon' data-testsid='search-top-btn' />
      </button>
    </div>
  );
}

export default Header;
