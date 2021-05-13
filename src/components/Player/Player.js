import { useContext } from 'react';
import { GameContext } from '../../contexts/GameContext';
import './Player.css';

const Player = () => {
    const { player, innerWinner, winner } = useContext(GameContext);

    return (
        <div className="Player">
            <p>Inner Winner: {innerWinner}</p>
            <p>Exterior Winner: {winner}</p>
            <h2>Player {player.id}</h2>
            <p>It's your turn, place your {player.symbol}!</p>
        </div>
    );
}
 
export default Player;