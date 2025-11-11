import React from "react";

export default function CheckTypeButtons({ onSelect }) {
  const options = ["Zero", "First", "Second", "Third", "Mixed"];

  // const isDisabled = useRef(false); do some research

  return (
    <div className="blockButtons">
      {options.map((opt) => (
        <button
          key={opt}
          value={opt.toLowerCase()}
          onClick={() => onSelect(opt)} // original line
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

// disable button after one click => prop with disabled={clicked} << new state
