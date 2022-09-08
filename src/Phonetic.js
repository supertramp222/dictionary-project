import React from "react";
import "./Phonetics.css";
import listen from "./listen-icon.svg";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetics">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        <img src={listen} alt="listen" />
      </a>
      <h2>{props.phonetic.text}</h2>
    </div>
  );
}
