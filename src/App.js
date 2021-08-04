import Grid from "./components/Grid";

import './App.css';

function App() {

  const grid_width = 10;
  const squared_numbers = 100;

  return (
    <Grid grid_width={grid_width} squared_numbers={squared_numbers} />
  );
}

export default App;
