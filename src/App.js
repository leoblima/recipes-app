import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
// import rockGlass from './images/rockGlass.svg';
import Profile from './pages/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import Explore from './pages/Explore';

function App() {
  return (
    <BrowserRouter>
      {/* <div className="meals">
        <span className="logo">TRYBE</span>
        <object
          className="rocksGlass"
          type="image/svg+xml"
          data={ rockGlass }
        >
          Glass
        </object>
      </div> */}
      <Route path="/profile" component={ Profile } />
      <Route path="/explore" component={ Explore } />
    </BrowserRouter>
  );
}

export default App;
