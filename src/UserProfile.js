import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserProfile.module.css';

const UserProfile = ({ firstname, lastname, location, age, picture, interests }) => {
  return (
    <div className={styles.UserProfile}>
      <img
        className={styles.Picture} 
        src={picture} 
        alt="user"
      />
      <div className={styles.Information}>
        <h2 className={styles.Name}>{firstname} {lastname} ({age})</h2>
        <span className={styles.Location}>{location.city} ({location.country})</span>
        {interests.map((interest) => (
          <span
            key={interest}
            className={styles.Interest}
          >
            {interest}
          </span>
        ))}
      </div>
    </div>
  );
};

UserProfile.propTypes = {
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  location: PropTypes.exact({
    country: PropTypes.string,
    city: PropTypes.string
  }),
  age: PropTypes.number,
  picture: PropTypes.string,
  interests: PropTypes.arrayOf(PropTypes.string)
};

export default UserProfile;