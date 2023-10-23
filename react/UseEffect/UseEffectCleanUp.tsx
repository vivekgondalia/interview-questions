import React, { useEffect } from "react";

function App() {
  const connect = () => console.log("Connecting...");
  const disconnect = () => console.log("Disconnecting...");

  useEffect(() => {
    //Connect/Subscribe/Show Modla/Fetch Data
    connect();

    //Disconnect/Unscubscribe/Hide Modal/Abort or Ignore Fetch Data
    return () => disconnect();
  });

  return <div></div>;
}

export default App;
