import React from "react";

export default function CatchUsedSentences({ sentences, count }) {
  return (
    <div className="catchUsed">
      <p>{count}</p>
      <ul>
        {sentences &&
          sentences.map((s) => <li key={s.info.id}>{s.info.sentence}</li>)}
      </ul>
    </div>
  );
}
