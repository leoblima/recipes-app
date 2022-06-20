import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const initialState = {
    email,
    setEmail,
    password,
    setPassword,
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
