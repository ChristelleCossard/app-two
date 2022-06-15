
import React from 'react';

const Button3 = ({ rounded, color, label, toggleModal }) => {
  const classList = [
    'button',
    rounded ? 'rounded' : null
  ];

  return (
    <button
      type="button"
      className={classList.join(' ')}
      style={{ background: color || '#0984e3' }}
      onClick={toggleModal}
    >
      {label}
    </button>
  );
}

export default Button3;