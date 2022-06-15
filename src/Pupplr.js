import React, { useState } from 'react';
import styles from './Pupplr.module.css';

import PupplrProfile from './PupplrProfile';
import PupplrActions from './PupplrActions';

import Fluffy from './fluffy.png';
import Hudson from './hudson.png';
import Maxine from './maxine.png';

const Pupplr = () => {
  const [puppies, setPuppies] = useState([
    {
      id: Math.random(),
      name: "Fluffy",
      age: 4,
      city: "Montpellier",
      picture: Fluffy,
      receivedLike: false
    },
    {
      id: Math.random(),
      name: "Hudson",
      age: 2,
      city: "Toronto",
      picture: Hudson,
      receivedLike: false
    },
    {
      id: Math.random(),
      name: "Maxine",
      age: 5,
      city: "New York",
      picture: Maxine,
      receivedLike: false
    }
  ]);

  const [activePuppy, setActivePuppy] = useState(puppies[0]);

  const handlePrevious = () => {
    setActivePuppy(puppies[findPuppyIndex('previous')]);
  };

  const handleLike = () => {
    const allButActivePuppy = puppies.filter((puppy) => (
      puppy.id !== activePuppy.id
    ));

    setActivePuppy({...activePuppy, receivedLike: !activePuppy.receivedLike });
    setPuppies([...allButActivePuppy, { ...activePuppy, receivedLike: !activePuppy.receivedLike }]);
  };

  const handleNext = () => {
    setActivePuppy(puppies[findPuppyIndex('next')]);
  };

  const findPuppyIndex = (direction) => {
    const currentPuppyIndex = puppies.findIndex((puppy) => (
      puppy.id === activePuppy.id
    ));

    return direction === 'next'
      ? currentPuppyIndex < puppies.length - 1 ? currentPuppyIndex + 1 : 0
      : currentPuppyIndex > 0 ? currentPuppyIndex - 1 : puppies.length - 1;
  }


  return (
    <div className={styles.Pupplr}>
      <PupplrProfile
        puppy={activePuppy}
      />
      <PupplrActions
        handlePrevious={handlePrevious}
        handleLike={handleLike}
        handleNext={handleNext}  
      />
    </div>
  )
}

export default Pupplr