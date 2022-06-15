import React from 'react';
import styles from './PupplrActions.module.css';

const PupplrActions = ({ handlePrevious, handleLike, handleNext }) => {
  return (
    <div className={styles.Actions}>
      <button
        type="button"
        onClick={handlePrevious}
      >
        ←&nbsp;précédent
      </button>
      
      <button
        type="button"
        className={styles.LikeButton}
        onClick={handleLike}
      >
        <span role="img" aria-label="like">❤️</span>
      </button>
      
      <button
        type="button"
        onClick={handleNext}
      >
        suivant&nbsp;→
      </button>
    </div>
  );
};

export default PupplrActions;