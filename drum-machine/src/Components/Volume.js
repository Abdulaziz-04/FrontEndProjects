import React, { useState } from "react";

const Volume = () => {
  const [slider, setSlider] = useState(0.75);
  const changeVolume = (e) => {
    setSlider(e.target.value);
  };
  const clips = [].slice.call(document.getElementsByClassName("clip"));
  clips.forEach((sound) => {
    sound.volume = slider;
  });
  return (
    <div className="container" id="drum-machine">
      <label for="customRange1">Volume</label>
      <input
        type="range"
        className="custom-range"
        id="customRange1"
        min="0"
        max="1"
        step="0.25"
        value={slider}
        onChange={changeVolume}
      />
    </div>
  );
};

export default Volume;
