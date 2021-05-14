import { useContext } from 'react';
import { GameContext } from '../../contexts/GameContext';

const Winner = () => {
    const { winner } = useContext(GameContext);

    const winningPlayer = winner === 'X' ? 1 : 2;

    return (
        <div className="Winner">
            <h2>Player {winningPlayer}</h2>
            <p>Congratulations! You win!</p>
        </div>
    );
}
 
export default Winner;