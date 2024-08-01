import './App.css';
import { Pad } from './components/Pad';
import React, { useState } from 'react';

const keys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];

function App() {

  const [display, setDisplay] = useState("Sound Effect");
  const [volume, setVolume] = useState(50);

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  }

  return (
    <div className="drum-machine" id='drum-machine'>
      <div id="control-container">
        <div id="display">{display}</div>
        <div className="volume-control">
          <label htmlFor="volume">Volume:{volume}</label>
          <input
            type="range"
            id="volume"
            min="1"
            max="100"
            // step="1"
            value={volume}
            onChange={handleVolumeChange}
          />
        </div>
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
