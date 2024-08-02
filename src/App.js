import "./App.css";
import { Pad } from "./components/Pad";
import React, { useState } from "react";
import { VolumeControl } from "./components/VolumeControl";

const keys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

function App() {
  const [display, setDisplay] = useState("Sound Effect");
  const [volume, setVolume] = useState(50);

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  };

  return (
    <div className="drum-machine" id="drum-machine">
      <div className="instruction" id="instruction">
        <h1>Drum Machine</h1>
        <p>Click or Press the key down to play. </p>
      </div>
      <div className="machine-container" id="machine-container">
        <div className="control-container" id="control-container">
          <div className="display" id="display">
            <p>{display}</p>
          </div>
          <VolumeControl
            volume={volume}
            handleVolumeChange={handleVolumeChange}
          />
        </div>
        <div className="pad-container" id="pad-container">
          {keys.map((item) => {
            return <Pad padKey={item} setDisplay={setDisplay} volume={volume} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
