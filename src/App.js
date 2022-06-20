import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Login />
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
      <Header />
      <Route path='/profile' component={Profile} />
    </BrowserRouter>
  );
}

export default App;
