import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [teste, setTeste] = useState('Teste');

  const initialState = {
    teste,
    setTeste,
  };

  return (
    <Context.Provider value={ initialState }>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
