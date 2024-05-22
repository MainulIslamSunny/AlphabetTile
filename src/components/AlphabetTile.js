import React from 'react';

const AlphabetTile = ({ letter, onClick }) => {
  return (
    <div className="tile" onClick={() => onClick(letter)}>
      {letter}
    </div>
  );
};

export default AlphabetTile;
