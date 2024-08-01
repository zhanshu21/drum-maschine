import React from "react";

export function VolumeControl({ volume, handleVolumeChange }) {
    return (
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
    )
}