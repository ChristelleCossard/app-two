import React from 'react';
import UserProfile from './UserProfile';
import Corgi from './corgi.jpg';


const UserModal = () => {
    const user = {
        firstname: 'Harvey',
        lastname: 'Kunkel',
        location: {
          country: 'United States',
          city: 'Nashua'
        },
        age: 43,
        picture: Corgi,
        interests: [
          'Cinematic FPV drone',
          'Hiking',
          'Music'
        ]
      };

  return (
    <div align="center">

<UserProfile {...user} />

    </div>
  )
}

export default UserModal