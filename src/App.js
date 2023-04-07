import React, { useState } from "react";

function App() {
  var [count, setCount] = useState(0);

  function handleMinus() {
    if (count > 0) {
      setCount(prevCount => prevCount - 1)
    }
  }
  function handleAdd() {
    setCount(prevCount => prevCount + 1)
  }
  return (
    <>
      <button onClick={handleMinus}>-</button>
      <p>{count}</p>
      <button onClick={handleAdd}>+</button>
    </>
  )
}

export default App;
