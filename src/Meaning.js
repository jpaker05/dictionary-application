import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (defintion, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition:</strong>
              {defintion.definition}
              <br />
              <strong>Example:</strong>
              <em> {defintion.example} </em>
              <br />
              <Synonyms synonyms={defintion.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
