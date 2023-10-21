import React from "react";
import Play from "./play.png";
import "./Translator.css";
import { useSpeechSynthesis } from "react-speech-kit";
const Translator = (text) => {
  const { speak } = useSpeechSynthesis();

  const handleSpeak = () => {
    console.log("text: ", text);
    speak(text);
  };
  return (
    <>
      <div className="play_div">
        <img
          className="play_image fas fa-volume-up"
          src={Play}
          alt="Play"
          onClick={() => {
            handleSpeak();
          }}
        />
      </div>
    </>
  );
};

export default Translator;
