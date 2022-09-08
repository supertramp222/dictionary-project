import React from "react";

export default function Synonyms(props) {
  if (props.synonyms && props.synonyms.length > 0) {
    return (
      <div className="synonyms">
        <section>
          {props.synonyms.map(function (synonym, index) {
            return (
              <h4 key={index} className="synonym">
                {synonym}
              </h4>
            );
          })}
        </section>
        <div className="horizontal-line" />
      </div>
    );
  } else {
    return null;
  }
}
