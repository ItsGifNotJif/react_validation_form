import React from 'react';
import googleIcon from '../images/google.svg';

const GoogleButton = () => {
  return (
    <button type="submit" className="button-1">
      <img className="signingIcons" src={googleIcon} alt="" />
      Sign Up
    </button>
  );
};

export default GoogleButton;
