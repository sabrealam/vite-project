import React, { useState } from "react";
import "./App.css";

function App({ name }) {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Hello, {name}</p>
    </>
  );
}

export default App;
