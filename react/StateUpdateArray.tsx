import React, { useState } from "react";

export const StateUpdateArray = () => {
  const [status, setStatus] = useState(["anxious", "motivated"]);

  const handleAdd = () => {
    setStatus([...status, "doubtful"]);
  };

  const handleRemove = () => {
    setStatus(status.filter((item) => item != "motivated"));
  };

  const handleUpdate = () => {
    setStatus(
      status.map((item) =>
        item == "anxious" ? "anxious - keeping in check" : item
      )
    );
  };

  const listOfStatus = status.map((item, idx) => <li key={idx}>{item}</li>);

  return (
    <>
      <h2>Current Mood Status : </h2>
      <ul>{listOfStatus}</ul>

      <button onClick={handleAdd}>Add Status</button>
      <button onClick={handleRemove}>Remove Motivated</button>
      <button onClick={handleUpdate}>Update Anxious</button>
    </>
  );
};
