import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';
import styles from './Restaurant.module.css';

const Restaurant = ({ name, menuItems }) => {
  return (
    <div className={styles.Restaurant}>
      <h2 className={styles.Name}>{name}</h2>
      <ul className={styles.MenuItems}>
        {menuItems.map((menuItem) => (
          <MenuItem
            key={menuItem.id} {...menuItem}
          />
        ))}
      </ul>
    </div>
  );
};

Restaurant.propTypes = {
  name: PropTypes.string.isRequired,
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    foodName: PropTypes.string.isRequired,
    foodType: PropTypes.string,
    calories: PropTypes.number.isRequired
  }))
};

export default Restaurant;