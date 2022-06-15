import React, { useState } from 'react';
import styles from './Albums.module.css';
import Corgi from './corgi.jpg';
import Album from './Album';

const Albums = () => {
  const [album, setAlbum] = useState({
    title: 'Lore',
    art: Corgi,
    performer: {
      type: 'band',
      name: 'Elder',
      from: 'Boston, US',
      formation: '2006' 
    },
    year: '2015',
    tracks: [
      {
        title: 'Compendium',
        length: 639
      },
      {
        title: 'Legend',
        length: 751
      },
      {
        title: 'Lore',
        length: 958
      },
      {
        title: 'Deadweight',
        length: 567
      },
      {
        title: 'Spirit at Aphelion',
        length: 632
      }
    ]
  });

  return (
    <div className={styles.Albums}>
      <Album
        title={album.title}
        art={album.art}
        performer={album.performer}
        year={album.year}
        tracks={album.tracks}
      />
    </div>
  );
};

export default Albums;