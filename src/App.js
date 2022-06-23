import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import Explore from './pages/Explore';
import Foods from './pages/Foods';
import ExploreByNationalities from './pages/ExploreByNationalities';
import Login from './pages/Login';
import Drinks from './pages/Drinks';
import ExploreFoods from './pages/ExploreFoods';
import ExploreDrinks from './pages/ExploreDrinks';
import NotFound from './pages/NotFound';
import DoneRecipes from './pages/DoneRecipes';
import ExploreByIngredients from './pages/ExploreByIngredients';
import Favorite from './pages/Favorite';
import FoodDetail from './pages/FoodDetail';
import DrinkDetail from './pages/DrinkDetail';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ Login } />
      <Route exact path="/explore/drinks" component={ ExploreDrinks } />
      <Route exact path="/explore/foods" component={ ExploreFoods } />
      <Route exact path="/profile" component={ Profile } />
      <Route exact path="/explore" component={ Explore } />
      <Route exact path="/foods" component={ Foods } />
      <Route path="/foods/:id" component={ FoodDetail } />
      <Route exact path="/drinks" component={ Drinks } />
      <Route path="/drinks/:id" component={ DrinkDetail } />
      <Route
        exact
        path="/explore/foods/nationalities"
        component={ ExploreByNationalities }
      />
      <Route
        exact
        path="/explore/drinks/nationalities"
        component={ NotFound }
      />
      <Route
        exact
        path="/done-recipes"
        component={ DoneRecipes }
      />
      <Route
        exact
        path="/explore/drinks/ingredients"
        component={ ExploreByIngredients }
      />
      <Route
        exact
        path="/favorite-recipes"
        component={ Favorite }
      />
    </BrowserRouter>
  );
}

export default App;
