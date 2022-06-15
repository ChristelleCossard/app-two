import React from 'react';
import PropTypes from 'prop-types';
import styles from './MenuItem.module.css';

const MenuItem = ({ foodName, foodType, calories }) => {
  return (
    <div className={styles.MenuItem}>
      <div className={styles.NameWrapper}>
        <span className={styles.Name}>{foodName}</span>
        <span className={styles.Type}>({foodType})</span>
      </div>
      <span className={styles.Calories}>{calories} kcal</span>
    </div>
  );
};

MenuItem.defaultProps = {
  foodType: 'unknown',
  calories: 0
};

MenuItem.propTypes = {
  foodName: PropTypes.string.isRequired,
  foodType: PropTypes.string,
  calories: PropTypes.number
};

export default MenuItem;