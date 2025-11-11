import React from "react";

export default function ReturnAllSentences({ sentences, count }) {
  return (
    <div className="returnSentences">
      <p>{count}</p>
      <ul>
        {sentences &&
          sentences.map((sentence) => (
            <li key={sentence.info.id}>{sentence.info.sentence}</li>
          ))}
      </ul>
    </div>
  );
}
