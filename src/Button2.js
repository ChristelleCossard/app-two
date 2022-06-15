import React from 'react';

const Button2 = ({ label, backgroundColor, isRounded, handleClick }) => {
  const classList = [
    'button',
    isRounded ? 'rounded' : null
  ];

  return (
    <button
      type="button"
      className={classList.join(' ')}
      style={{ background: backgroundColor || '#0984e3' }}
      onClick={handleClick}
    >
      {label}
    </button>
  );
}

export default Button2;