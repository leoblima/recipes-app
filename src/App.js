import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import Explore from './pages/Explore';

function App() {
  return (
    <BrowserRouter>
      <Route path="/profile" component={ Profile } />
      <Route path="/explore" component={ Explore } />
    </BrowserRouter>
  );
}

export default App;
