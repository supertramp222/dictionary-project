import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <section>
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <p>
                {definition.definition}
                <br />
                <em>{definition.example}</em>
                <br />
              </p>
            </div>
          );
        })}
      </section>
      <div className="horizontal-line" />
    </div>
  );
}
