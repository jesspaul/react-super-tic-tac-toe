import { useContext } from 'react';
import { GameContext } from '../../contexts/GameContext';
import './Player.css';

const Player = () => {
    const { player, togglePlayer, winner } = useContext(GameContext);

    return (
        <div className="Player">
            <button onClick={togglePlayer}>Toggle</button>
            <p>Winner: {winner}</p>
            <h2>Player {player.id}</h2>
            <p>It's your turn, place your {player.symbol}!</p>
        </div>
    );
}
 
export default Player;