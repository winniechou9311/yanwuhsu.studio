import React, { useState } from "react";

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSignInClick = () => {
    setIsSignUp(false);
  };

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleFirstFormSubmit = (e) => {
    e.preventDefault();
  };

  const handleSecondFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={`container ${isSignUp ? "right-panel-active" : ""}`}>
      <button id="signIn" onClick={handleSignInClick}>
        Sign In
      </button>
      <button id="signUp" onClick={handleSignUpClick}>
        Sign Up
      </button>
      <form id="form1" onSubmit={handleFirstFormSubmit}>
        {/* Your form content */}
      </form>
      <form id="form2" onSubmit={handleSecondFormSubmit}>
        {/* Your form content */}
      </form>
    </div>
  );
};

export default AuthForm;
