import React, { Fragment, useState , useEffect } from 'react'
 
function AppFunctional () {
  const [timeLeft, setTimeLeft] = useState(10);
  const [isPurchassed, setIsPurchassed] = useState(false);
 
  const handleBuy = () => {
    setIsPurchassed(true);
  }
 
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    if(timeLeft <= 0 ) {
      document.title = "Fin de l'offre promotionnelle"
    } else {
      document.title = "OFFRE PROMOTIONNELLE";
    }

    return () => {
      clearInterval(timer);
    }
  }, [timeLeft]);
 
  return (
    <div className="App-main">
      {timeLeft > 0 && !isPurchassed ? (
        <Fragment>
          <h1>
            <span role="img" aria-label="lightning">⚡️</span>
            Offre promotionnelle limitée !
            <span role="img" aria-label="lightning">⚡️</span>
          </h1>
          <h2>Vite, il vous reste <strong>{timeLeft}s</strong> pour acheter</h2>
          <h3>
            <span role="img" aria-label="canard">🦆</span>
            Canard de bain à 1,99 €
          </h3>
          <button className="App-button"
            onClick={handleBuy}> Acheter
          </button>
        </Fragment>
      ) : (
        <Fragment>
          {isPurchassed ? (
            <Fragment>
              <h1>Bravo vous venez d'acheter:</h1>
              <h3>
                <span role="img" aria-label="canard">🦆</span>
                Magnifique canard de bain
              </h3>
            </Fragment>
          ) : (
            <h1>
              Fin de l'offre promotionnelle
              <span role="img" aria-label="sad">😢</span>
            </h1>
          )}
        </Fragment>
      )}
    </div>
  );
};
 
export default AppFunctional;