import React, { useRef, useEffect, useCallback } from "react";

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

const descriptions = {
  Q: "Heater 1",
  W: "Heater 2",
  E: "Heater 3",
  A: "Heater 4",
  S: "Clap",
  D: "Open-HH",
  Z: "Kick-n'-Hat",
  X: "Kick",
  C: "Closed-HH",
};


export function Pad(props) {
  const audioRef = useRef(null);
  const buttonRef = useRef(null);

  const handleClick = () => {
    if (audioRef.current){
      audioRef.current.volume = props.volume / 100;
      audioRef.current.play().catch(error => {
      console.error("Error playing audio:", error);
      });
    }
    props.setDisplay(descriptions[props.padKey]);
  };

  const handleKeyDown = useCallback((event) => {
    // event.key property returns the key that was pressed as a string
    if (event.key.toUpperCase() === props.padKey) {
      // triggers a click event on the corresponding button
      buttonRef.current.click();
    }
  }, [props.padKey]);

  useEffect(() => {
    // register the handleKeyDown function as an event listener for the keydown event
    // whenever a key is pressed, the handleKeyDown function will be called
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    }
  }, [handleKeyDown]);

  return (
    <button
      className="drum-pad"
      id={`pad-${props.padKey}`}
      onClick={handleClick}
      ref={buttonRef}
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
