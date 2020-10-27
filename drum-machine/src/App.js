import "./App.css";
import React from "react";
import Drumpad from "./Components/Drumpad.js";
import Volume from "./Components/Volume.js";
import Power from "./Components/Power.js";

function App() {
  const drumSounds = [
    {
      keyCode: 81,
      letter: "Q",
      id: "Heater-1",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      keyCode: 87,
      letter: "W",
      id: "Heater-2",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      keyCode: 69,
      letter: "E",
      id: "Heater-3",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      keyCode: 65,
      letter: "A",
      id: "Heater-4",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      keyCode: 83,
      letter: "S",
      id: "Clap",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      keyCode: 68,
      letter: "D",
      id: "Open-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      keyCode: 90,
      letter: "Z",
      id: "Kick-n'-Hat",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      keyCode: 88,
      letter: "X",
      id: "Kick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      keyCode: 67,
      letter: "C",
      id: "Closed-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];
  return (
    <div>
      <div className="container" id="drum-machine">
        <Power />
        <h3 className="text-center display-3 text-white">
          Drum Machine <i className="fas fa fa-drum"></i>
        </h3>
        <h4 id="display" className="text-center">
          Press any button :
        </h4>
        <div id="drum-machine">
          {drumSounds.map((i) => (
            <Drumpad
              letter={i.letter}
              url={i.url}
              key={i.letter}
              string={i.id}
            />
          ))}
        </div>
        <Volume />
      </div>
      <footer className="text-center">Created by Abdulaziz Suria</footer>
    </div>
  );
}

export default App;
