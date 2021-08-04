import Grid from "./components/Grid";

import './App.css';

function App() {

  const gridWidth = 10;
  const squaredNumbers = 100;

  return (
    <Grid gridWidth={gridWidth} squaredNumbers={squaredNumbers} />
  );
}

export default App;
