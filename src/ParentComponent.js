import React, { useState } from 'react';
import Button2 from './Button2';

const ParentComponent = () => {

    const handleClick = () => {
      /**
        * Le bouton a été cliqué
        * Déclencher la soumission du formulaire
        * en envoyant les données des champs de texte.
        */
    };
  
    return (
      <Button2
        label="Click me!"
        backgroundColor="#ff4757"
        isRounded={true}
        handleClick={handleClick}
      />
    );
  };

  export default ParentComponent;