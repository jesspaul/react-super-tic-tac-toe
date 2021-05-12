import './App.css';
import Gameboard from './components/Gameboard/Gameboard';
import Instructions from './components/Instructions/Instructions';
import Player from './components/Player/Player';

function App() {
  return (
    <div className="App">
      <h1>Super Tic Tac Toe</h1>
      <Instructions />
      <Player />
      <Gameboard />
    </div>
  );
}

export default App;
