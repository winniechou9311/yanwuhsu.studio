import React, { useState } from 'react';
import classes from './callback.module.css';

const CallbackPage = () => {
  const [showLogin, setShowLogin] = useState(false);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className={classes.loginPage}>
      <h1></h1>
      <div className={classes.form}>
        {showLogin ? (
          <form className={classes.loginForm}>
            <input type="text" placeholder="username" className={classes.input} />
            <input type="password" placeholder="password" className={classes.input} />
            <button className={classes.button}>login</button>
            <p className={classes.message}>Not registered? <a href="#" onClick={toggleForm}>Create an account</a></p>
          </form>
        ) : (
          <form className={classes.registerForm}>
            <input type="text" placeholder="name" className={classes.input} />
            <input type="password" placeholder="password" className={classes.input} />
            <input type="text" placeholder="email address" className={classes.input} />
            <button className={classes.button}>create</button>
            <p className={classes.message}>Already registered? <a href="#" onClick={toggleForm}>Sign In</a></p>
          </form>
        )}
      </div>
    </div>
  );
}

export default CallbackPage;
