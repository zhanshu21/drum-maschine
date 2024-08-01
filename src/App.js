import './App.css';
import { Pad } from './components/Pad';
import React, { useState } from 'react';

const keys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];

function App() {

  const [display, setDisplay] = useState("Sound Effect");
  const [volume, setVolume] = useState(0.5);

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  }

  return (
    <div className="drum-machine" id='drum-machine'>
      <div id="display">{display}</div>
      <div className="volume-control">
        <label htmlFor="volume">Volume</label>
        <input
          type="range"
          id="volume"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
      <div id="pad-container">
        {keys.map((item) => {
          return <Pad padKey={item} setDisplay={setDisplay} volume={volume}/>
        })}
      </div>
    </div>
  );
}

export default App;
