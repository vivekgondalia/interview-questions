import React, { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>Current Count : {counter}</p>
      <button
        className="btn btn-primary"
        onClick={() => setCounter(counter + 1)}
      >
        Increment Counter
      </button>
    </div>
  );
};
