import React, { useEffect, useRef } from "react";

function UseEffect() {
  const ref = useRef<HTMLInputElement>(null);

  //Pure Component : Return only JSX markup.
  useEffect(() => {
    //called after each render
    //examples to use it: storing in local storage, working with dom elements, call the server
    if (ref.current) ref.current.focus();
  });

  useEffect(() => {
    document.title = "Effect Hook";
  });

  return (
    <div>
      <h1 className="mb-3">The Effect Hook</h1>
      <input ref={ref} type="text" className="form-control" />
    </div>
  );
}

export default UseEffect;
