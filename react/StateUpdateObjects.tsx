import React, { useState } from "react";

export const StateUpdateObjects = () => {
  //This is an example of two concepts for Updating State
  // 1) Updating Object and 2) Updating Array of Objects

  const [bugs, setBugs] = useState([
    { id: 1, title: "Fix Bug 1", fixed: false },
    { id: 2, title: "Fix Bug 2", fixed: false },
  ]);

  const handleBugFix = (e: any) => {
    const bugId = e.currentTarget.getAttribute("data-value");
    const updatedState = bugs.map((bug) => {
      return bug.id == bugId ? { ...bug, title: "Fixed", fixed: true } : bug;
    });

    setBugs(updatedState);
  };

  const listOfBugs = bugs.map((bug, idx) => {
    return (
      <button key={bug.id} data-value={bug.id} onClick={handleBugFix}>
        {bug.title}
      </button>
    );
  });

  return <div>{listOfBugs}</div>;
};
