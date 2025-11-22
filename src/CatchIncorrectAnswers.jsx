import React from "react";

export default function CatchIncorrectAnswers({ sentences, count }) {
  return (
    <div className="catchIncorrect">
      <p>{count}</p>
      <ul>{sentences && sentences.map((s, i) => <li key={i}>{s}</li>)}</ul>
    </div>
  );
}
