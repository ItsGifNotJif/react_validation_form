import React from 'react';
import facebookIcon from '../images/facebook.svg';

const FacebookButton = () => {
  return (
    <button type="submit" className="button-2">
      <img className="signingIcons" src={facebookIcon} alt="" />
      Sign Up
    </button>
  );
};

export default FacebookButton;
