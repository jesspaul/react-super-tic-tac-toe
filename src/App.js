import './App.css';
import ExteriorSquare from './components/ExteriorSquare/ExteriorSquare';
import Gameboard from './components/Gameboard/Gameboard';
import Instructions from './components/Instructions/Instructions';

function App() {
  return (
    <div className="App">
      <h1>Super Tic Tac Toe</h1>
      <Instructions />
      <Gameboard />
      <ExteriorSquare />
    </div>
  );
}

export default App;
