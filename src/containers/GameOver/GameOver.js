import React from 'react';

const GameOver = (props) => {
  const { points } = props.location.aboutProps
  return (
    <h1>Seu total de pontos foi: {points}</h1>
  );
}

export default GameOver;
