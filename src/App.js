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
import NotFound from './pages/NotFound';
import DoneRecipes from './pages/DoneRecipes';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ Login } />
      <Route exact path="/profile" component={ Profile } />
      <Route exact path="/explore" component={ Explore } />
      <Route exact path="/foods" component={ Foods } />
      <Route exact path="/drinks" component={ Drinks } />
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
    </BrowserRouter>
  );
}

export default App;
