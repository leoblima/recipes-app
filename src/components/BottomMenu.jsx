import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../context/context';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import './BottomMenu.css';

export default function BottomMenu() {
  const { setFilterByCategory } = useContext(Context);
  const removeFilters = () => {
    setFilterByCategory(null);
  };

  return (
    <div className="footer-div">
      <footer className="footer" data-testid="footer">
        <Link to="/drinks">
          <button
            src={ drinkIcon }
            data-testid="drinks-bottom-btn"
            type="button"
            onClick={ removeFilters }
          >
            <img src={ drinkIcon } alt="Ícone bebidas" />
          </button>
        </Link>
        <Link to="/explore">
          <button
            src={ exploreIcon }
            data-testid="explore-bottom-btn"
            type="button"
            onClick={ removeFilters }
          >
            <img src={ exploreIcon } alt="Ícone explorar" />
          </button>
        </Link>
        <Link to="/foods">
          <button
            src={ mealIcon }
            data-testid="food-bottom-btn"
            type="button"
            onClick={ removeFilters }
          >
            <img src={ mealIcon } alt="Ícone comidas" />
          </button>
        </Link>
      </footer>
    </div>
  );
}
