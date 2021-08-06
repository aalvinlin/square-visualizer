import React, { useState } from "react";

import Grid from "./components/Grid";
import Controls from "./components/Controls";

import './App.css';

function App() {

  const [gridWidth, setGridWidth] = useState(10);

  const squaredNumbers = 100;

  return (
    <>
      <Controls gridWith={gridWidth} setGridWidth={setGridWidth} />
      <Grid gridWidth={gridWidth} squaredNumbers={squaredNumbers} />
    </>
  );
}

export default App;
