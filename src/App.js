import React, { useState } from 'react';
import AlphabetTile from './components/AlphabetTile';
import './App.css';

const App = () => {
  const [outputString, setOutputString] = useState('');

  const handleTileClick = (letter) => {
    let newOutput = outputString + letter;
    // Replace sequences of three or more identical letters with a single underscore
    const regex = /(.)\1{2,}/g;
    newOutput = newOutput.replace(regex, '_');
    setOutputString(newOutput);
  };

  const renderTiles = () => {
    return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => (
      <AlphabetTile key={letter} letter={letter} onClick={handleTileClick} />
    ));
  };

  return (
    <div className="app">
      <div className="grid">
        {renderTiles()}
      </div>
      <div id="outputString" className="output">
        {outputString}
      </div>
    </div>
  );
};

export default App;
