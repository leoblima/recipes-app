import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import Explore from './pages/Explore';
import Foods from './pages/Foods';

import Login from './pages/Login';
import Drinks from './pages/Drinks';
import ExploreFoods from './pages/ExploreFoods';
import ExploreDrinks from './pages/ExploreDrinks';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ Login } />
      <Route path="/profile" component={ Profile } />
      <Route exact path="/explore" component={ Explore } />
      <Route path="/foods" component={ Foods } />
      <Route path="/drinks" component={ Drinks } />
      <Route path="/explore/drinks" component={ ExploreDrinks } />
      <Route path="/explore/foods" component={ ExploreFoods } />
    </BrowserRouter>
  );
}

export default App;
