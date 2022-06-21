import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from '../context/context';
import './Login.css';

function Login() {
  const [disabled, setDisabled] = useState(true);
  const {
    email,
    setEmail,
    password,
    setPassword,
  } = useContext(Context);

  const checkPassword = (pwd) => {
    const minChar = 6;
    return pwd.length > minChar;
  };

  const checkEmail = (mail) => {
    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailFormat.test(mail);
  };

  const history = useHistory();

  const handleSubmit = () => {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    const obj = {
      email,
    };
    localStorage.setItem('user', JSON.stringify(obj));
    history.push('/foods');
  };

  useEffect(() => {
    const minPassword = checkPassword(password);
    const minEmail = checkEmail(email);
    if (minPassword && minEmail) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, password]);

  return (
    <div className="login-main">
      <form className="login">
        <h3>
          Login
        </h3>
        <label htmlFor="email">
          <input
            name="email"
            type="text"
            label="E-mail"
            data-testid="email-input"
            onChange={ (e) => setEmail(e.target.value) }
          />
        </label>
        <br />
        <label htmlFor="password">
          <input
            name="password"
            type="password"
            label="Password"
            onChange={ (e) => setPassword(e.target.value) }
            data-testid="password-input"
          />
        </label>
        <br />
        <button
          type="button"
          data-testid="login-submit-btn"
          disabled={ disabled }
          onClick={ handleSubmit }
        >
          Enter
        </button>
      </form>
    </div>
  );
}

export default Login;
