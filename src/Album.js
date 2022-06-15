import React from 'react';
import styles from './Albums.module.css';

const Album = ({ title, art, author, year, tracks }) => {

  const tracksDisplay = tracks.map((song) => (
    <li
      key={song.title}
      className={styles.Track}  
    >
      <div className={styles.TrackNameWrapper}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
        <span className={styles.TrackTitle}>{song.title}</span>
      </div>
      
      <div className={styles.TrackAction}>
        <span className={styles.TrackLength}>{Math.round((song.length / 60) * 100) / 100}"</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    </li>
  ));

  return (
    <div className={styles.Album}>
      <img 
        src={art} 
        alt="album-art"
        className={styles.Art}
      />

      <div className={styles.Description}>
        <span className={styles.Year}>{year}</span>
        <h2 className={styles.Title}>{title}</h2>
         <span className={styles.Performer}>
            </span>
      </div>

      <ul className={styles.TrackList}>
        {tracksDisplay}
      </ul>
    </div>
  );
};

export default Album;