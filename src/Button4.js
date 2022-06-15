import React from 'react';

const Button4 = ({ backgroundColor }) => {
    const buttonStyles = {
        backgroundColor,
        color: "blue",
        border: "none"
      };

  return (
    <button
      type="button"
      style={buttonStyles}
    >
      Click me
    </button>
  );
};

export default Button4;
