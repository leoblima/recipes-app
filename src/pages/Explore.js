import React from 'react';
import { useHistory } from 'react-router-dom';
import BottomMenu from '../components/BottomMenu';
import Header from '../components/Header';
import './Explore.css';

const Explore = () => {
  const history = useHistory();

  const redirectToExploreFoods = () => {
    history.push('/explore/foods');
  };

  const redirectToExploreDrinks = () => {
    history.push('/explore/drinks');
  };

  return (
    <div>
      <Header />
      <div className="explore-items">
        <button
          type="button"
          data-testid="explore-foods"
          onClick={ redirectToExploreFoods }
          className="explore-btn btn btn-dark mb-3"
        >
          Explore Foods
        </button>
        <button
          type="button"
          data-testid="explore-drinks"
          onClick={ redirectToExploreDrinks }
          className="explore-btn btn btn-dark"
        >
          Explore Drinks
        </button>
      </div>
      <BottomMenu />
    </div>
  );
};

export default Explore;
