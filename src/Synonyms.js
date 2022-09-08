import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms && props.synonyms.length > 0) {
    return (
      <div className="synonyms">
        {props.synonyms.map(function (synonym, index) {
          return (
            <h4 key={index} className="synonym">
              {synonym}
            </h4>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
