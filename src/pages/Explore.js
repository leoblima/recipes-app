import React from 'react';
import { useHistory } from 'react-router-dom';
import BottomMenu from '../components/BottomMenu';
import Header from '../components/Header';

const Explore = () => {
  const history = useHistory();

  const redirectToExploreFoods = () => {
    history.push('/explore/foods');
  };

  const redirectToExploreDrinks = () => {
    history.push('/explore/drinks');
  };

  return (
    <div
      className="explore container d-flex flex-column justify-content-center"
    >
      <Header />
      <button
        type="button"
        data-testid="explore-foods"
        onClick={ redirectToExploreFoods }
        className="btn btn-dark mb-3"
      >
        Explore Foods
      </button>
      <button
        type="button"
        data-testid="explore-drinks"
        onClick={ redirectToExploreDrinks }
        className="btn btn-dark"
      >
        Explore Drinks
      </button>
      <BottomMenu />
    </div>
  );
};

export default Explore;
