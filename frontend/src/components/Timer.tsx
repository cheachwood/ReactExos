import { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    if (seconds <= 0) return; // Sort si déjà à 0

    // On montre un timer qui s'incrémente chaque seconde
    const interval = setInterval(() => {
      setSeconds((prevSec) => prevSec - 1);
    }, 1000);

    // on stop l'intervalle lors du démontage du composant
    return () => clearInterval(interval);
  }, [seconds]);

  if (seconds <= 0) {
    return (
      <div>
        <h2 className="text-white text-2xl">Boom! 💥</h2>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-white text-2xl">Attention ça va péter Timer: {seconds} seconds</h2>
    </div>
  );
};

export default Timer;
