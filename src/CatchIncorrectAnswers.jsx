import React from "react";

export default function CatchIncorrectAnswers({ sentences, count }) {
  return (
    <div className="catchIncorrect">
      <ul>
        {sentences &&
          sentences.map((s, i) => (
            <li key={i}>
              {i + 1}: {s}
            </li>
          ))}
      </ul>
      <p>Total incorrect: {count}</p>
    </div>
  );
}
