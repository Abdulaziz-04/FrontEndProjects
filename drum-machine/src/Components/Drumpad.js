import React, { useRef } from "react";

const Drumpad = ({ letter, url, string }) => {
  const audioElement = useRef(null);
  const playSound = () => {
    document.getElementById("display").innerHTML = string;
    audioElement.current.play();
    setTimeout(() => {
      document.getElementById("display").innerHTML = "Press any button :";
    }, 1500);
  };
  return (
    <div id={string}>
      <button
        className="cell text-center drum-pad"
        id="drum-button"
        id={string}
        onClick={playSound}
      >
        {letter}
        <audio
          ref={audioElement}
          src={url}
          className="clip"
          id={letter}
        ></audio>
      </button>
    </div>
  );
};
document.addEventListener("keydown", (e) => {
  const audio = document.getElementById(e.key.toUpperCase());
  if (audio) {
    const parent = audio.parentNode;
    document.getElementById("display").innerHTML = parent.id;
    audio.currentTime = 0;
    parent.classList.add("active");
    audio.play();
    audio.addEventListener("ended", () => {
      setTimeout(() => {
        parent.classList.remove("active");
        document.getElementById("display").innerHTML = "Press any button :";
      }, 80);
    });
  }
});

export default Drumpad;
