import React, { useRef } from "react";

const audioSources = {
  Q: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
  W: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3",
  E: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3",
  A: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3",
  S: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3",
  D: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3",
  Z: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3",
  X: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3",
  C: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3",
};

export function Pad(props) {
  const audioRef = useRef(null);

  const handleClick = () => {
    if (audioRef.current){
      audioRef.current.play().catch(error => {
      console.error("Error playing audio:", error);
      });
    }
  };

  return (
    <button
      className="drum-pad"
      id={`pad-${props.padKey}`}
      onClick={handleClick}
    >
      {props.padKey}
      <audio
        src={audioSources[props.padKey]}
        id={props.padKey}
        className="clip"
        ref={audioRef}
      ></audio>
    </button>
  );
}
