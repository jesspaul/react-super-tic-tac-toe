import { useContext } from 'react';
import { GameContext } from '../../contexts/GameContext';
import './Player.css';

const Player = () => {
    const { player } = useContext(GameContext);

    return (
        <div className="Player">
            <h2>Player {player.id}</h2>
            <p>It's your turn, place your {player.symbol}!</p>
        </div>
    );
}
 
export default Player;