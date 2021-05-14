import './App.css';
import { useContext } from 'react';
import Gameboard from './components/Gameboard/Gameboard';
import Instructions from './components/Instructions/Instructions';
import Player from './components/Player/Player';
import { GameContext } from './contexts/GameContext';
import Winner from './components/Winner/Winner';

function App() {
  const { winner } = useContext(GameContext);

  return (
    <div className="App"
      style={winner !== null ? {backgroundImage: 'linear-gradient(#ECC30B, #F79D65, #FF2ECC)'} : null}
    >
      <h1>Super Tic Tac Toe</h1>
      <Instructions />
      {
        winner === null ? 
        <Player /> :
        <Winner />
      }
      <Gameboard />
    </div>
  );
}

export default App;
