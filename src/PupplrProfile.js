import React from 'react';
import styles from './PupplrProfile.module.css';

const PupplrProfile = ({ puppy }) => {
  return (
    <div className={styles.PupplrProfile}>
      <img
        src={puppy.picture}
        className={styles.PuppyPicture}
        alt="puppy"
      />
      <div className={styles.TextContent}>
        <span className={styles.Name}>
          {puppy.name} { puppy.receivedLike ? '❤️' : '' }
        </span>

        <span className={styles.Information}>
          {puppy.age} - {puppy.city}
        </span>
      </div>
    </div>
  );
};

export default PupplrProfile;